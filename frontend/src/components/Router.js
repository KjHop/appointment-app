import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './Main';

class Router extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/' component={Main}/>
            </Switch>
        );
    }
}

export default Router;