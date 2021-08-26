import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import "../../App.css";
import "./TodoApp.css";
import AuthenticatedRoute from "./AuthenticatedRoute.jsx";
import LoginComponent from "./LoginComponent.jsx";
import HeaderComponent from "./HeaderComponent.jsx";
import ListTodosComponent from "./ListTodosComponent.jsx";
import LogoutComponent from "./LogoutComponent.jsx";
import FooterComponent from "./FooterComponent";
import WelcomeComponent from "./WelcomeComponent";
import ErrorComponent from "./ErrorComponent";
import TodoComponent from "./TodoComponent";

class TodoApp extends Component {
  render() {
    return (
      <div className="TodoApp">
        <Router>
          <HeaderComponent />
          <Switch>
            <Route path="/" exact component={LoginComponent} />
            <Route path="/login" component={LoginComponent} />
            <AuthenticatedRoute
              path="/welcome/:name"
              component={WelcomeComponent}
            />
            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
            <AuthenticatedRoute path="/logout" component={LogoutComponent} />
            <Route component={ErrorComponent} />
          </Switch>
          <FooterComponent />
        </Router>
        {/* <LoginComponent />
        <WelcomeComponent /> */}
      </div>
    );
  }
}

/*
function ShowInvalidCredentials(props) {
  if (props.hasLoginFailed) {
    return <div>Invalid Credentials</div>;
  }
  return null;
}

function ShowLoginSuccessMessage(props) {
  if (props.showSuccessMessage) {
    return <div>Login Sucessful</div>;
  }
  return null;
}
*/

export default TodoApp;
