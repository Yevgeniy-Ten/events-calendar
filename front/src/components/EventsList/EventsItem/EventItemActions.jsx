import React from "react";
import {Button, ListItemSecondaryAction, Menu, MenuItem} from "@material-ui/core";

const EventItemActions = ({onRemove}) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };
    return (
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
    );
};

export default EventItemActions;
