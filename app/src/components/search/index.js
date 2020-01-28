import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Searchfield from './searchfield';
import SearchResult from './searchresult';
import { search } from '../../api';
import _ from 'lodash';
import { Box } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

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

const rows = [
    { name: 'City', value: 'Zürich' },
    { name: 'Country', value: 'CH' },
    { name: 'Temp', value: '7°C' },
    { name: 'Temp feels like', value: '5.5°C' },
    { name: 'Temp min', value: '0.5°C' },
    { name: 'Temp max', value: '5.5°C' },
];

const EmptyResponse = (props) => (
    <Paper {...props}>
        <Typography variant="body1" gutterBottom>
            Wow, such empty... Use text field to search for current weather.
        </Typography>
    </Paper>
);

const Search = () => {
    const [weatherData, setWeatherData] = useState({});

    useEffect(() => {
        search({ city: 'Zürich' }).then(data => {
            setWeatherData(data);
        });
    });

    const classes = useStyles();

    return (
        <div>
            <Paper className={classes.paper}>
                <Searchfield />
            </Paper>
            {_.isEmpty(rows) ? <EmptyResponse className={classes.paper} /> : <SearchResult rows={rows} />}
        </div>
    );
};

export default Search;
