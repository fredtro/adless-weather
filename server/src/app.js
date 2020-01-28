import express from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';
import searchRouter from './routes/search';
import createError from 'http-errors';
import swaggerUi from 'swagger-ui-express';
import promBundle from 'express-prom-bundle';
import expressHealthCheck from 'express-healthcheck';
import cors from 'cors';

const metricsMiddleware = promBundle({ includeMethod: true, metricsPath: '/prometheus' });
const swaggerDocument = require('../swagger.json');

const app = express();

app.use(metricsMiddleware);
app.use(cors());
app.use('/health', expressHealthCheck());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));

app.use('/search', searchRouter);
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});

module.exports = app;
