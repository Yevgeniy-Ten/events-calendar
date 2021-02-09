import React from "react";
import {Grid, Typography} from "@material-ui/core";
import RegisterForm from "../../components/RegisterForm/RegisterForm";
import {makeStyles} from "@material-ui/core";
import {shallowEqual, useDispatch, useSelector} from "react-redux";
import useForm from "../../hooks/useForm";
import {registerUser} from "../../reducers/auth/authActions";

const useStyles = makeStyles({
    root: {
        minHeight: "75vh",
    }
})

const Register = () => {
    const classes = useStyles()
    const {loading, errors} = useSelector(state => state.auth, shallowEqual)
    const dispatch = useDispatch()
    const {binder, values} = useForm({
        email: "",
        password: "",
        name: ""
    })
    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(registerUser(values))
    }
    return (
        <Grid className={classes.root} spacing={2} direction={"column"} container justify={"center"}
              alignItems={"center"}>
            <Grid item>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
            </Grid>
            <Grid md={7} item>
                <RegisterForm binder={binder} errors={errors} loading={loading} onSubmit={onSubmitHandler}/>
            </Grid>
        </Grid>
    );
};

export default Register;
