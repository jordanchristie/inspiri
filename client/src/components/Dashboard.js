import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions/index';

import Card from './Card';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    renderSavedQuotes(user) {
        if (user.savedQuotes) {
            user.savedQuotes.map((quote, i) => {
                return <Card key={i} quote={quote}  />
            })
        } else {  
            return <p> You don't have any quotes yet.
                <Link to="/explore">  Click here</Link> to start!
            </p>
        }
    }


    render() {
        const { user } = this.props
      return (
        <div id="dashboard-page">
            <img id="profile-pic" src={user.avatar} alt="profile pic" />
            <h3>Welcome {user.firstName}</h3> 
            <hr />
            <section>      
            {this.renderSavedQuotes({user})}
            </section>
        </div>
    )  
    }
    
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps, actions)(Dashboard);