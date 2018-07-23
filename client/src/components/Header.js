import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {

    render() {
        return (
            <div className="nav-wrapper">
                <Link to="/" className="left brand-logo"> Inspiri </Link>
                <ul className="right">
                <Link to="/explore"><li>Explore</li></Link>
                <Link to="/dashboard"> <li>Profile</li> </Link>
                </ul>
            </div>
        )
    }
}

const mapStateToProps = ({authorized}) => {
    return {
        authorized
    }
}

export default connect(mapStateToProps)(Header);