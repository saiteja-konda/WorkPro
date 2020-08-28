import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import { Zoom } from "react-toastify";
import SecuredRoute from "./utills/secureRoutes";
import store from "./store";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Layout/header";
// import Footer from "./components/Layout/footer";
import Register from "./components/userManagment/register";
import Login from "./components/userManagment/login";
import jwt_decode from "jwt-decode";
import { SET_CURRENT_USER } from "./actions/types";
import Index from "./components/index";
import Dashboard from "./components/project/dashBoard";
import UpdateProject from "./components/project/updateProject";
import AddProject from "./components/project/addProject";
import ProjectBoard from "./components/projectBoard/projectBoard";
import AddProjectTask from "./components/projectBoard/projectTask/addProjectTask";
import UpdateProjectTask from "./components/projectBoard/projectTask/updateProjectTask";
import setJWTToken from "./utills/setJWTToken";
import { logout } from "./actions/securityActions";
import User from "./components/userManagment/user";
const jwtToken = localStorage.jwtToken;

if (jwtToken) {
  setJWTToken(jwtToken);
  const decoded_jwtToken = jwt_decode(jwtToken);
  store.dispatch({
    type: SET_CURRENT_USER,
    payload: decoded_jwtToken,
  });

  const currentTime = Date.now() / 1000;
  if (decoded_jwtToken.exp < currentTime) {
    store.dispatch(logout());
    window.location.href = "/";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <ToastContainer
            position="bottom-right"
            autoClose={2000}
            hideProgressBar={true}
            newestOnTop={false}
            closeOnClick
            transition={Zoom}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            
          />
          {/*public Routes*/}
          <Route exact path="/" component={Index} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          {/*private Routes*/}
          <Switch>
            <SecuredRoute exact path="/dashboard" component={Dashboard} />
            <SecuredRoute exact path="/addProject" component={AddProject} />
            <SecuredRoute
              exact
              path="/updateProject/:id"
              component={UpdateProject}
            />
            <SecuredRoute
              exact
              path="/projectBoard/:id"
              component={ProjectBoard}
            />
            <SecuredRoute
              exact
              path="/addProjectTask/:id"
              component={AddProjectTask}
            />
            <SecuredRoute
              exact
              path="/updateProjectTask/:backlog_id/:pt_id"
              component={UpdateProjectTask}
            />
            <SecuredRoute exact path="/user" component={User} />
          </Switch>
          {/*<Footer />*/}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
