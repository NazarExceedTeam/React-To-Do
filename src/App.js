import './App.css';
import {Route, Switch, Redirect, withRouter} from "react-router";
import TaskList from "./Components/TaskList/TaskList";
import Header from "./Components/Header";
import Login from "./Components/Login/Login"
import Registration from "./Components/Login/Registration/Registration";
function App() {
    return (
        <div className="App">
            <Header/>
            <Switch>
                <Route path='/registration' component={Registration}/>
                <Route path='/login' component={Login}/>
                <Route path='/tasks' component={TaskList}/>
                {/*<Redirect from='/' to='/login'/>*/}
            </Switch>
        </div>
    );
};


export default withRouter(App);