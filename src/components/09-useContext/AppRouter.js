import AboutScreen from "./AboutScreen";
import LoginScreen from "./LoginScreen";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    // Link
} from "react-router-dom";
import HomeScreen from "./HomeScreen";

const AppRouter = () => {
    return (
        <Router>
            <div>

                <Switch>
                    <Route exact path='/' component={HomeScreen}/>
                    <Route exact path='/about' component={AboutScreen}/>
                    <Route exact path='/login' component={LoginScreen}/>
                </Switch>
            </div>
        </Router>
    )
}

export default AppRouter;