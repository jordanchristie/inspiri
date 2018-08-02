import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class ExplorePage extends Component {
    constructor(props) {
        super(props);
        this.state = { exploreQuote: [] }
    }
   
    componentDidMount() {
       this.renderQuotes();
    }
    
    renderQuotes() {
        this.props.fetchExploreQuotes();
    }

    render() {
        console.log(this.state);
        return (
            <div>
                <h1>Explore</h1>
                <p> {this.props.exploreQuote.quoteText} </p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        exploreQuote: state.exploreQuote
    }
}


export default connect(mapStateToProps, actions)(ExplorePage);