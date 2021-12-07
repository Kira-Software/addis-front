import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/home";
import { Employee } from "./pages/employee";
//import { Edit } from "./pages/edit";
import { Provider } from "react-redux";
import store from "./Redux/store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee" element={<Employee />} />
          {/* <Route path="/edit" element={<Edit />} /> */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
