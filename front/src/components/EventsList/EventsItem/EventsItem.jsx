import React from "react";
import {
    ListItem,
    makeStyles,
    ListItemText,
} from "@material-ui/core";
import EventItemActions from "./EventItemActions";

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
const EventsItem = ({name, duration, date, onRemove, notActions}) => {
    const classes = useStyles()

    const dateInTime = new Date(date).toLocaleTimeString()
    return (
        <ListItem className={classes.root}>
            <ListItemText primary={name} secondary={`Duration of the event ${duration}, in ${dateInTime}`}
                          secondaryTypographyProps={{
                              className: classes.color
                          }}/>
            {!notActions && <EventItemActions onRemove={onRemove}/>}
        </ListItem>
    );
};

export default EventsItem;
