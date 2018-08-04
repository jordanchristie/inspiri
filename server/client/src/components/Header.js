import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Inspiri</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/explore">Explore</Link></li>
                        <li><Link to="/dashboard">Profile</Link></li>
                        <li><a href="/api/logout">Logout</a></li>
                    </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

const mapStateToProps = ({authorized}) => {
    return {
        authorized
    }
}

export default connect(mapStateToProps)(Header);