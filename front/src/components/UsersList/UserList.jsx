import React from "react";
import {List, ListItemText, ListItem, ListItemSecondaryAction, Button} from "@material-ui/core";

const UsersList = ({users, onDeleteFriend}) => {
    return (
        <List>
            <ListItem>
                <ListItemText primary={users.length ? "You shared with:" : "You not shared"}/>
            </ListItem>
            {users.map(user => (
                <ListItem key={user._id}>
                    <ListItemText primary={`${user.name} ${user.email}`}/>
                    <ListItemSecondaryAction>
                        <Button onClick={onDeleteFriend.bind(null, user._id)}
                                variant={"contained"} color={"secondary"}>
                            Delete
                        </Button>
                    </ListItemSecondaryAction>
                </ListItem>
            ))}
        </List>
    );
};

export default UsersList;
