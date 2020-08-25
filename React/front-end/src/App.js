import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Header from "./components/Layout/header";
import Footer from "./components/Layout/footer";
import Dashboard from "./components/dashBoard";
import AddProject from "./components/project/addProject";
import { Provider } from "react-redux";
import store from "./store";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <Header />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/addProject" component={AddProject} />
          <Footer />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
