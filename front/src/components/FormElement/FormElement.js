import React from "react";
import {MenuItem, Grid, TextField, withStyles} from "@material-ui/core";


const CssTextField = withStyles(theme => ({
    root: {
        "& label": {
            color: theme.palette.info.light,
            "&.Mui-focused": {
                color: theme.palette.info.main,
            },
        },
        "& input": {
            color: theme.palette.common.white
        },
        "& .MuiOutlinedInput-root": {
            "& fieldset": {
                borderColor: theme.palette.info.light,
            },
            "&:hover fieldset": {
                borderColor: theme.palette.info.dark,
            },
            "&.Mui-focused fieldset": {
                borderColor: theme.palette.info.main,
            },
        },
    },
}))(TextField);

const FormElement = ({
                         name,
                         label,
                         value,
                         onChange,
                         required,
                         error,
                         type,
                         options,
                         multiline,
                         rows,
                         select,
                         ...props
                     }) => {
        let inputChildren = null;
        if (select) {
            inputChildren = options.map((option) => (
                <MenuItem key={option._id} value={option._id}>
                    {option.title}
                </MenuItem>
            ))
        }
        return (
            <Grid item xs={12}>
                <CssTextField
                    multiline={multiline}
                    rows={rows}
                    variant="outlined"
                    fullWidth
                    required={required}
                    error={!!error}
                    helperText={error}
                    id={name}
                    label={label}
                    type={type}
                    name={name}
                    value={value}
                    onChange={onChange}
                    autoComplete={name}
                    {...props}
                >{inputChildren}</CssTextField>
            </Grid>
        );
    }
;

export default FormElement