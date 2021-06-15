import React from 'react';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import Home from './Home';
import About from './About';
import People from './People';
import NavBar from './NavBar';
import Person from './Person';
import Error from './Error';
const Index = () => {
    return (
        
        <Router>
            <NavBar/>
            <Switch>
            <Route exact path="/">
                <Home></Home>
            </Route>
            <Route path="/about">
                <About></About>
            </Route>
            <Route path="/people">
                <People></People>
            </Route>
            <Route path="/person/:id" children={<Person></Person>}></Route>
            <Route path="*">
                <Error></Error>
            </Route>
            </Switch>
        </Router>
    );
};

export default Index;