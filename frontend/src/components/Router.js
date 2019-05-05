import * as React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main from './Main';
import AppointmentPage from './AppointmentPage';

class Router extends React.Component{
    render(){
        return(
            <Switch>
                <Route path='/appointment' component={AppointmentPage}/>
                <Route path='/' component={Main}/>
            </Switch>
        );
    }
}

export default Router;