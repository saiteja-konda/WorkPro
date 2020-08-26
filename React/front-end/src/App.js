import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Layout/header";
// import Footer from "./components/Layout/footer";
import Dashboard from "./components/dashBoard";
import AddProject from "./components/project/addProject";
import { Provider } from "react-redux";
import store from "./store";
import Register from "./components/register";
import Login from "./components/login";
import Index from "./components/index";
import UpdateProject from './components/project/updateProject';
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/index" component={Index} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Route exact path="/updateProject/:id" component={UpdateProject} />

          {/*<Footer />*/}
        </div>
      </Router>
    </Provider>
  );
}

export default App;
