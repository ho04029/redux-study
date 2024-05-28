import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Detail from "../routes/Detail";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" exact Component={Home}></Route>
        <Route path="/:id" exact Component={Detail}></Route>
      </Routes>
    </Router>
  );
};

export default App;
