import Routes from "../Routes/Routes";
import {Box, makeStyles, Container} from "@material-ui/core";
import grey from "@material-ui/core/colors/grey"

const useStyles = makeStyles({
    wrapper: {
        backgroundColor: grey[900],
        color: grey[50]
    }
})

function App() {
    const classes = useStyles()
    return (
        <Box minHeight={"100vh"} className={classes.wrapper}>
            <Container maxWidth={"xl"}>
                <Routes/>
            </Container>
        </Box>
    );
}

export default App;
