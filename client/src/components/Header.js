import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import background from '../background.jpg'

class Header extends Component {


    render() {
        const { user } = this.props;
        console.log(user)
        return (
            <Fragment>
                <nav>
                    <div className="nav-wrapper">
                        <Link to="/" className="brand-logo">Inspiri</Link>
                        { Object.keys(user).length  ?
                            <Fragment>
                                <a href="" data-target="slide-out" className="sidenav-trigger">
                                    <i className="fa fa-bars fa-2x"></i>
                                </a>
                                <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li><Link to="/explore">Explore</Link></li>
                                    <li><Link to="/dashboard">Profile</Link></li>
                                    <li><a href="/api/logout">Logout</a></li>
                                </ul>
                            </Fragment>
                            :
                            null
                            }
                    </div>
                </nav>

                <ul className="sidenav" id="slide-out">
                    <li>
                        <div className="user-view">
                            <div className="background">
                                <img src={background} alt="background"/>
                            </div>
                            <img className="circle" src={user.avatar} alt="profile pic"/>
                            <span className="white-text name">{user.fullName}</span>
                        </div>
                    </li>
                    <li><Link to="/explore">Explore</Link></li>
                    <li><Link to="/dashboard">Profile</Link></li>
                    <li><a href="/api/logout">Logout</a></li>
                </ul>
            </Fragment>
        )
    }
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps)(Header);