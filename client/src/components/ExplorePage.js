import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExplorePage extends Component {

    componentDidMount() {
        this.renderQuotes();
    }
    
    renderQuotes() {
        this.props.fetchExploreQuotes();
    }

    render() {
        console.log(this.props);
        return (
            <div>
            
            </div>
        )
    }
}


export default connect(null, actions)(ExplorePage);