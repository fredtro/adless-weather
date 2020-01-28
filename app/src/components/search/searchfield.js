import React, { useState } from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import IconButton from '@material-ui/core/IconButton';
import FormControl from '@material-ui/core/FormControl';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import SearchIcon from '@material-ui/icons/Search';

const Searchfield = props => {
    const [value, setValue] = useState('');
    const { handleSubmit } = props;

    const handleChange = e => {
        setValue(e.target.value);
    };
    const onKeyUp = e => {
        if (e.key === 'Enter') {
            handleSubmit(value);
        }
    };

    return (
        <React.Fragment>
            <FormControl variant="outlined" fullWidth>
                <InputLabel shrink={true} htmlFor="weather-search">
                    Search
                </InputLabel>
                <OutlinedInput
                    id="weather-search"
                    placeholder="City, optional: Country (2-letter)"
                    endAdornment={
                        <InputAdornment position="end">
                            <IconButton onClick={() => handleSubmit(value)} edge="end">
                                <SearchIcon />
                            </IconButton>
                        </InputAdornment>
                    }
                    notched
                    labelWidth={50}
                    onChange={handleChange}
                    onKeyUp={e => onKeyUp(e)}
                />
            </FormControl>
        </React.Fragment>
    );
};

export default Searchfield;
