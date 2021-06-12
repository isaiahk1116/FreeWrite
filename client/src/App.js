import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { WritingProvider } from './context/WritingContext';

import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Select from './components/Select/Select';
import Write from './components/Write/Write';
import Finished from './components/Finished/Finished';

import './App.css';

const App = () => {
    return (
        <WritingProvider>
            <BrowserRouter>
                <>
                    <Navbar />
                    <Switch>
                        <Route path="/" exact component={Home} /> 
                        <Route path="/select" exact component={Select} />
                        <Route path="/write" exact component={Write} />
                        <Route path="/finished" exact component={Finished} />
                    </Switch>
                </>
            </BrowserRouter>
        </WritingProvider>
    );
};

export default App;