import React from "react";
import {createMuiTheme, ThemeProvider} from "@material-ui/core";
import {DatePicker, DateTimePicker} from "@material-ui/pickers";
import {lightBlue} from "@material-ui/core/colors";

const dateTheme = createMuiTheme({
    palette: {
        primary: {
            main: lightBlue.A200,
        }
    },
    overrides: {
        MuiFormLabel: {
            root: {
                color: lightBlue.A200,
                borderBottomColor: lightBlue.A100
            },
        },
        MuiInputLabel: {
            root: {
                color: lightBlue.A200,
                borderBottomColor: lightBlue.A100
            },
        },
        MuiInputBase: {
            root: {
                color: lightBlue.A200,
            },
        },
    }
})
const DateElement = ({date, changeDate, type}) => {
    return (
        <ThemeProvider theme={dateTheme}>
            {type === "time" ? <DateTimePicker
                value={date}
                disablePast
                minDate={new Date()}
                onChange={changeDate}
                label="Event time and day"
                showTodayButton
            /> : <DatePicker
                disableToolbar
                minDate={new Date()}
                variant="inline"
                label="Events day"
                autoOk
                value={date}
                onChange={changeDate}
            />}
        </ThemeProvider>
    );
};

export default DateElement;
