import React from "react";
import { useSelector } from "react-redux";
import {Redirect, Route, Switch} from "react-router-dom";

import AdminLayout from "./layouts/Admin";
import AuthLayout from "./layouts/Auth";
import Registration from './layouts/Registration';
import ErrorPage from "./layouts/ErrorPage/ErrorPage";

import {selectUserStatus} from "./redux/user/user.selectors";

export const App = () => {
    const isUserLoggedIn = useSelector(selectUserStatus);

    return (
        <Switch>
            <Route exact path="/404" render={() => <ErrorPage/>} />
            <Route path="/registration" render={(props) => <Registration {...props} />}/>
            <Route path="/" render={
                isUserLoggedIn ?
                    (props) => <AdminLayout {...props} />
                    :
                    (props) => <AuthLayout {...props} />}
            />
            <Redirect from="/" to="/admin/index" />
        </Switch>
    )
}

export default App;
