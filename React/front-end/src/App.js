import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Layout/header";
// import Footer from "./components/Layout/footer";
import Dashboard from "./components/project/dashBoard";
import AddProject from "./components/project/addProject";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/userManagment/register";
import Login from "./components/userManagment/login";
import Index from "./components/index";
import UpdateProject from "./components/project/updateProject";
import ProjectBoard from "./components/projectBoard/projectBoard";
import AddProjectTask from "./components/projectBoard/projectTask/addProjectTask";
import UpdateProjectTask from "./components/projectBoard/projectTask/updateProjectTask";
import jwt_decode from "jwt-decode";
import setJWTToken from "./utills/setJWTToken";
import { SET_CURRENT_USER } from "./actions/types";

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
    window.location.href = "/ ";
  }
}

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          {/*public Routes*/}

          <Route exact path="/" component={Index} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />

          {/*private Routes*/}
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />
          <Route exact path="/projectBoard/:id" component={ProjectBoard} />
          <Route exact path="/addProjectTask/:id" component={AddProjectTask} />
          <Route
            exact
            path="/updateProjectTask/:backlog_id/:pt_id"
            component={UpdateProjectTask}
          />
          {/*<Footer />*/}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
