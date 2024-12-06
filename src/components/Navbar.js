import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/neu.png';
import './Navbar.css';

class Navbar extends Component{
    state={clicked:false};

    handleClick=()=>{
        this.setState({clicked:!this.state.clicked})
    }
    render(){
        return(
            <>
             <nav>
                <div className="logo">
                    <img src={logo} alt="Logo"></img>
                    <span>OJT APP</span>
                </div>
                    <ul id="navbar" className={this.state.clicked ? 'navbar active' : 'navbar'}>
                        <li><NavLink to="/mainpage" className={({isActive}) => isActive ? 'activeHome' : ''}>Home</NavLink></li>
                        <li><NavLink to="/editinfo" className={({isActive}) => isActive ? 'activeHome' : ''}>Edit Information</NavLink></li>
                        <li><NavLink to="/uploadrequirements" className={({isActive}) => isActive ? 'activeHome' : ''}>Upload Requirements</NavLink></li>
                        <li><NavLink to="/generateletter" className={({isActive}) => isActive ? 'activeHome' : ''}>Endorsement Letter</NavLink></li>
                    </ul>
    
                <div id="mobile" onClick={this.handleClick}>
                    <i id="bar" className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
            </nav>
            </>
        )
    }

}

export default Navbar;