import React from 'react';
import Home from './Home';
import About from './About';
import AnimalsList from './Animals/AnimalsList';
import { Switch, Route } from "react-router-dom";

const Main = () => {
    return (
        <div>
        <main>  
        <Switch>
            <Route path="/" exact component={Home}></Route>
            <Route path="/About" component={About}></Route>
            <Route path="/Animals" component={AnimalsList}></Route>
        </Switch>
        </main> 
        </div>
    );
};

export default Main;