import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Auth from './Components/Auth/Auth';
import Form from './Components/Form/Form';
import Post from './Components/Post/Post';
import Dashboard from './Components/Dashboard/Dashboard';

export default (
    <Switch>
        <Route path= '/' component={Auth} exact />
        <Route path= '/new' component={Form}/>
        <Route path= '/post/:postid' component={Post}/>
        <Route path= '/dashboard' component={Dashboard}/>
    </Switch>
)