import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';

const Searchfield = props => {
    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth>
                <InputLabel shrink={true} htmlFor="weather-search">
                    Search
                </InputLabel>
                <OutlinedInput
                    id="weather-search"
                    placeholder="City, Country (2-letter)"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    notched
                    labelWidth={50}
                />
            </FormControl>
        </React.Fragment>
    );
};

export default Searchfield;
