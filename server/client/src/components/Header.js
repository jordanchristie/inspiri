import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        const { user } = this.props;
        console.log(user)
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                    <Link to="/" className="left brand-logo">Inspiri</Link>
                    <ul id="nav-mobile" className="right">
                        <li><Link to="/explore">Explore</Link></li>
                        <li><Link to="/dashboard">Profile</Link></li>
                        { user ?
                         <li><a href="/api/logout">Logout</a></li>
                         :
                         null
                        }
                    </ul>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps)(Header);