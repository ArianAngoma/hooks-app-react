import {
    BrowserRouter as Router,
    Switch,
    Route, Redirect,
    // Link
} from "react-router-dom";
import NavBar from "./NavBar";
import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
    return (
        <Router>
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/login' component={LoginScreen}/>

                    {/*<Route component={HomeScreen}/>*/}
                    <Redirect to="/"/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;