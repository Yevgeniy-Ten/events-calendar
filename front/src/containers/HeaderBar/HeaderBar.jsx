import React from "react";
import {Link} from "react-router-dom"
import {AppBar, Button, makeStyles, Toolbar, Typography} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    title: {
        flexGrow: 1
    },
    appBar: {
        top: "auto",
        bottom: 0
    },
    createBtn: {
        position: "absolute",
        top: "-50%",
        right: "20%",
        backgroundColor: theme.palette.success.main,
        color: theme.palette.common.white,
        fontSize: "20px"
    }
}));
const HeaderBar = () => {
    const classes = useStyles()
    return (
        <AppBar position={"fixed"} className={classes.appBar} color={"default"}>
            <Toolbar>
                <Typography className={classes.title} variant="h6">
                    Events
                </Typography>
                <Button size={"large"} to={"/event/creator"}
                        component={Link} variant={"contained"}
                        className={classes.createBtn}>+</Button>
                <Button color="inherit">Logout</Button>
            </Toolbar>
        </AppBar>
    );
};

export default HeaderBar;
