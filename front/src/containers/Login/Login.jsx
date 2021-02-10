import React from "react";
import {Grid, makeStyles, Typography} from "@material-ui/core";
import LoginForm from "../../components/LoginForm/LoginForm";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {loginUser} from "../../reducers/auth/authActions";

const useStyles = makeStyles({
    root: {
        minHeight: "75vh",
    }
})
const Login = () => {
    const classes = useStyles()
    const {loading, errors} = useSelector(state => state.auth, shallowEqual)
    const dispatch = useDispatch()
    const {binder, values} = useForm({
        email: "",
        password: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(loginUser(values))
    }
    return (
        <Grid className={classes.root} spacing={2} direction={"column"} container justify={"center"}
              alignItems={"center"}>
            <Grid item>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Grid>
            {errors && errors.msg && <Grid item>
                <Typography color={"secondary"} variant="h6">
                    {errors.msg}
                </Typography>
            </Grid>}
            <Grid md={7} item>
                <LoginForm binder={binder} onSubmit={onSubmitHandler} loading={loading}/>
            </Grid>
        </Grid>
    )
};

export default Login;
