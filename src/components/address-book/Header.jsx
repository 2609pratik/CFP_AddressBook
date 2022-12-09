import React, { Component } from 'react';
import logo from '../../assets/images/logo.png';
import './Header.css';

class Header extends Component {
     
    render() {
        return (
            <div>
                <header className="header-content header">

                    <div className="logo-content">
                        <img src={logo} alt="" />
                        <div>
                            <span className="emp-text">
                                ADDRESS
                            </span>
                            <br />
                            <span className="emp-text emp-payroll" >BOOK</span>
                        </div>
                    </div>
                </header>
            </div>
        );
    }
}

export default Header;