import React from "react";
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    },
    appBar: {
        top: "auto",
        bottom: 0
    }
});
const HeaderBar = () => {
    const classes = useStyles()
    return (
        <AppBar position={"fixed"} className={classes.appBar} color={"default"}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    Events
                </Typography>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
