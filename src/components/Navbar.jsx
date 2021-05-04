import React from 'react';

const Navbar = (props) => {
    return  <nav className="navbar navbar-expand-sm" style={{ backgroundColor: "#e6e7fb"}}>
        <a className="navbar-brand" href="/">Consolidata Forms</a>

        <ul className="navbar-nav ml-auto">
            <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/add">Add Form</a>
            </li>
        </ul>
    </nav> 
}

export default Navbar;