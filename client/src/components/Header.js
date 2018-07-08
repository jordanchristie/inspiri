import React, {  Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class Header extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div className="nav-wrapper">
                <Link to="/" className="left brand-logo"> Inspiri </Link>
                <ul className="right">
                    <li>Explore</li>
                    <li>Profile</li>
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