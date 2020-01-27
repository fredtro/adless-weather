import React        from 'react';
import logo         from './logo.svg';
import './App.css';
import CssBaseline  from "@material-ui/core/CssBaseline";
import AppBar       from "@material-ui/core/AppBar";
import Toolbar      from "@material-ui/core/Toolbar";
import Typography   from "@material-ui/core/Typography";
import Paper        from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core/styles";
import Header       from "./components/header";
import Searchfield  from "./components/searchfield";

const useStyles = makeStyles(theme => ({
    layout: {
        width: 'auto',
        marginLeft: theme.spacing(2),
        marginRight: theme.spacing(2),
        [theme.breakpoints.up(600 + theme.spacing(2) * 2)]: {
            width: 600,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
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
    heading: {
        marginTop: theme.spacing(3),
        [theme.breakpoints.up(600 + theme.spacing(3) * 2)]: {
            marginTop: theme.spacing(3),
        },
    }
}));

function App() {
    const classes = useStyles();

    return (
        <React.Fragment>
            <CssBaseline />
            <Header/>
            <main className={classes.layout}>
                <Typography className={classes.heading} component="h1" variant="h4" align="center">
                    Weather Search By City
                </Typography>

                <Paper className={classes.paper}>
                    <Searchfield className={classes.heading}/>
                </Paper>
            </main>
        </React.Fragment>
    );
}

export default App;
