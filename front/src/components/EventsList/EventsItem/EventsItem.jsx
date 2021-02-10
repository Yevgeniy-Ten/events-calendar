import React from "react";
import {
    ListItem,
    makeStyles,
    ListItemText,
    ListItemSecondaryAction,
    Button,
    Menu,
    MenuItem
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        borderTop: `1px solid ${theme.palette.info.light}`
    },
    mr: {
        marginRight: theme.spacing(2)
    },
    color: {
        color: theme.palette.info.main
    }
}))
const EventsItem = ({name, duration, createdDate, onRemove}) => {
    const classes = useStyles()
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    const dateInTime = new Date(createdDate).toLocaleTimeString()
    return (
        <ListItem className={classes.root}>
            <ListItemText primary={name} secondary={`Duration of the event ${duration}, in ${dateInTime}`}
                          secondaryTypographyProps={{
                              className: classes.color
                          }}/>
            <ListItemSecondaryAction>
                <Button variant={"contained"} onClick={handleClick}>
                    Menu
                </Button>
                <Menu id="simple-menu"
                      anchorEl={anchorEl}
                      keepMounted
                      open={Boolean(anchorEl)}
                      onClose={handleClose}>
                    <MenuItem onClick={handleClose}>Redding</MenuItem>
                    <MenuItem onClick={onRemove}>Delete</MenuItem>
                </Menu>
            </ListItemSecondaryAction>
        </ListItem>
    );
};

export default EventsItem;
