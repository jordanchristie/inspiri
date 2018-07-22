import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExplorePage extends Component {
    
    renderQuotes() {
        this.props.fetchExploreQuotes();
    }

    render() {
        return (
            <div>
            {this.renderQuotes()};
            </div>
        )
    }
}


export default connect(null, actions)(ExplorePage);