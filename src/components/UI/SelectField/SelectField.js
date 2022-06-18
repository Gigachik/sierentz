import React from 'react';
import { useField } from 'formik';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

export const SelectField = ({ ...props }) => {
    const [field, meta] = useField(props.field.name);

    const errorText = meta.error && meta.touched ? meta.error : '';
    return (
        // <TextFieldUI
        //     helperText={errorText}
        //     error={!!errorText}
        //     id="outlined-basic"
        //     fullWidth
        //     variant="filled"
        //     {...props}
        //     {...field}
        // />
        <FormControl variant="filled" fullWidth>
            <InputLabel id="demo-simple-select-filled-label">User</InputLabel>
            <Select
                id="demo-simple-select"
                {...props}
                {...field}
            >
                <MenuItem value="John">John</MenuItem>
                <MenuItem value="Ivan">Ivan</MenuItem>
                <MenuItem value="Sonya">Sonya</MenuItem>
            </Select>
        </FormControl>
    );
};

