import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Searchfield from './searchfield';

const Header = () => {
    return (
        <AppBar position="absolute" color="default" style={{ position: 'relative' }}>
            <Toolbar>
                <Typography variant="h6" color="inherit" noWrap>
                    Adless Weather App
                </Typography>
            </Toolbar>
        </AppBar>
    );
};

export default Header;
