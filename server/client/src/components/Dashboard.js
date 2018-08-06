import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../actions/index';

class Dashboard extends Component {

    componentDidMount() {
        console.log(this.props)
        this.props.fetchUser()
    }

    render() {
      return (
        <div>
            <h1>User</h1>

        </div>
    )  
    }
    
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps, actions)(Dashboard);