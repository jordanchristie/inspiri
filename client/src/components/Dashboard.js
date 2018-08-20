import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchUser } from '../actions/index';

import Card from './Card';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    renderSavedQuotes = () => {
        const {user} = this.props;
        if (!user.savedQuotes) {
            return <p> You don't have any quotes yet.
                <Link to="/explore">  Click here</Link> to start!
            </p>
        } else {  
            return user.savedQuotes.reverse().map((quote, i) => {
                return <Card key={i} {...quote} />
            })

        }
    }


    render() {
        const { user } = this.props;
      return (
        <div id="dashboard-page">
            <img id="profile-pic" src={user.avatar} alt="profile pic" />
            <h3>Welcome {user.firstName}</h3> 
            <hr />
            <section>      
            {this.renderSavedQuotes()}
            </section>
        </div>
    )  
    }
    
}

const mapStateToProps = ({user}) => {
    return { user }
}

export default connect(mapStateToProps, {fetchUser})(Dashboard);