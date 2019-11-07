import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar bg-dark">
            <h1>
                <a href="index.html">
                    <i className="fas fa-code"></i>
                </a>
            </h1>
            <ul>
                <li>
                    <a href="profiles.thml">Developers</a>
                </li>
                <li>
                    <a href="register.thml">Developers</a>
                </li>
                <li>
                    <a href="login.thml">Developers</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
