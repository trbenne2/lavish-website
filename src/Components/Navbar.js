import React, { Fragment } from 'react'

function Navbar() {
    return (
        <Fragment>
            <div className="navbar">
                <div className="navbar-container container">
                    <Link to='/' className="navbar-logo">
                        Lavish
                    </Link>
                    <div className="menu-icon">
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Navbar
