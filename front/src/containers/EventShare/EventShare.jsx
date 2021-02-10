import React, {useEffect} from "react";
import {Drawer, Grid, withStyles} from "@material-ui/core";
import SharedWithForm from "../../components/SharedWithForm/SharedWithForm";
import grey from "@material-ui/core/colors/grey";
import useForm from "../../hooks/useForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import UsersList from "../../components/UsersList/UserList";
import {CLOSE_DRAWER} from "../../reducers/shareReducer/shareTypes";
import {deleteUserFriend, eventShare, getUserFriends} from "../../reducers/shareReducer/shareActions";

const DrawerCss = withStyles(theme => ({
    root: {
        "& .MuiDrawer-paper": {
            backgroundColor: grey[800],
            padding: theme.spacing(1),
            color: theme.palette.common.white,
            maxWidth: "400px"
        }
    }
}))(Drawer)


const EventShare = () => {

    const dispatch = useDispatch()
    const {binder, values, clearForm} = useForm({
        email: ""
    })
    const {isCreated, drawerIsOpen, errors, users} = useSelector(state => state.share, shallowEqual)

    const closeDrawer = () => dispatch({type: CLOSE_DRAWER})
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(eventShare(values.email))
    }
    useEffect(() => {
        if (isCreated) {
            clearForm()
        }
    }, [isCreated, clearForm])
    useEffect(() => {
        if (drawerIsOpen) {
            dispatch(getUserFriends())
        }
    }, [drawerIsOpen, dispatch])
    const onDeleteFriend = (id) => dispatch(deleteUserFriend(id))
    return (
        <>
            <DrawerCss anchor={"left"} open={drawerIsOpen} onClose={closeDrawer}>
                <Grid container spacing={1}>
                    <Grid item xs={12}>
                        <SharedWithForm errors={errors}
                                        isCreated={isCreated}
                                        onSubmit={onSubmitHandler}
                                        binder={binder}/>
                    </Grid>
                    <Grid item xs={12}>
                        <UsersList onDeleteFriend={onDeleteFriend} users={users}/>
                    </Grid>
                </Grid>
            </DrawerCss>
        </>
    )
};

export default EventShare;
