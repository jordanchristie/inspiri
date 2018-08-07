import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as actions from '../actions/index';

import Card from './Card';

class Dashboard extends Component {

    componentDidMount() {
        this.props.fetchUser()
    }

    renderSavedQuotes() {
        if (this.props.user.savedQuotes) {
            this.props.user.savedQuotes.map((quote, i) => {
                return <Card key={i} quote={quote}  />
            })
        } else {  
            return <p> You don't have any quotes yet.
                <Link to="/explore">Click here</Link> to start!
            </p>
        }
    }


    render() {
        const { user } = this.props
      return (
        <div>
            <h1>{user.googleId}</h1> 
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

export default connect(mapStateToProps, actions)(Dashboard);