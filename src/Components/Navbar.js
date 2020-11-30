import React, { Fragment } from 'react'
import {Link} from 'react-router-dom'
import {MdFingerprint} from 'react-icons/md'
import {FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
    return (
        <Fragment>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        <MdFingerprint className="navbar-icon"/>
                        Lavish
                    </Link>
                    <div className="menu-icon">
                        {}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
