import React, { useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Searchfield from './searchfield';
import SearchResult from './searchresult';
import { search } from '../../api';
import _ from 'lodash';
import Typography from '@material-ui/core/Typography';
import {createRows, mapQueryToSearchParams} from '../../util';

const useStyles = makeStyles(theme => ({
    paper: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
        padding: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(3),
            marginBottom: theme.spacing(6),
            padding: theme.spacing(3),
        },
    },
}));

const EmptyResponse = props => (
    <Paper {...props}>
        <Typography variant="body1" gutterBottom>
            Wow, such empty... Use text field to search for current weather.
        </Typography>
    </Paper>
);

const Search = () => {
    const classes = useStyles();
    const [weatherData, setWeatherData] = useState([]);

    const handleSubmit = query => {
        if (_.isEmpty(query.trim())) {
            setWeatherData([]);
            return;
        }

        const searchParams = mapQueryToSearchParams(query);

        search(searchParams)
            .then(response => {
                setWeatherData(createRows(response));
            })
            .catch(e => {
                setWeatherData([{ name: 'Problem', value: 'City not found.' }]);
            });
    };

    return (
        <div>
            <Paper className={classes.paper}>
                <Searchfield handleSubmit={handleSubmit} />
            </Paper>
            {_.isEmpty(weatherData) ? <EmptyResponse className={classes.paper} /> : <SearchResult rows={weatherData} />}
        </div>
    );
};

export default Search;
