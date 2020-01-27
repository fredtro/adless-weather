import React from 'react';
import TextField from '@material-ui/core/TextField';

const Searchfield = (props) => {
    return (
        <React.Fragment>
            <TextField
                id="outlined-full-width"
                label="Search"
                style={{ margin: 8 }}
                placeholder="City, Country (2-letter)"
                fullWidth
                margin="normal"
                InputLabelProps={{
                    shrink: true,
                }}
                variant="outlined"
            />
        </React.Fragment>
    );
};

export default Searchfield;
