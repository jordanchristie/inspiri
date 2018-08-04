import React from 'react';
import { connect } from 'react-redux';

const Dashboard = ({user}) => {
    return (
        <div>
            <h1>User</h1>

        </div>
    )
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps, null)(Dashboard);