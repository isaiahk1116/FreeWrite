import React from 'react';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Select from './components/Select/Select';
import Write from './components/Write/Write';

import './App.css';

const App = () => {
    return (
        <BrowserRouter>
            <>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} /> 
                    <Route path="/select" exact component={Select} />
                    <Route path="/write" exact component={Write} />
                </Switch>
            </>
        </BrowserRouter>
    );
};

export default App;