import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import {BrowserRouter as Router} from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <h1>Animal App</h1>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
};

export default App;