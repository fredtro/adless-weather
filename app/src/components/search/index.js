import React          from 'react';
import Paper          from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Searchfield    from "./searchfield";
import SearchResult   from "./searchresult";

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

const Search = () => {
    const classes = useStyles();
    return (
        <div>
            <Paper className={classes.paper}>
                <Searchfield />
            </Paper>
            <SearchResult />
        </div>
    );
};

export default Search;
