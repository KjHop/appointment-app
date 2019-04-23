import * as React from 'react';
import "../styles/Main.css";
import {NavLink} from 'react-router-dom';
import profilePic from '../public/images/profilePic.svg'

class Main extends React.Component{
    render(){
        return (
            <div className="Main">
                <header>
                    <ul>
                        <li><NavLink to='/appointment' activeClassName='activeLink'>make appointment</NavLink></li>
                        <li><NavLink to='/about' activeClassName='activeLink'>about me</NavLink></li>
                        <li><NavLink to='/contact' activeClassName='activeLink'>contact</NavLink></li>
                    </ul>
                </header>
                <main>
                    <div className="mainBigtext">
                        The best pediatrist<br></br> in <span className="bigTextEnd">the world</span>
                    </div>
                    <img className="profilePic" src={profilePic} alt="profilePic"/>
                </main>
            </div>
        );
    }
}

export default Main;