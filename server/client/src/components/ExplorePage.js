import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Card from './Card';

class ExplorePage extends Component {
   
    componentDidMount() {
       this.renderQuotes();
    }
    
    renderQuotes() {
        this.props.fetchExploreQuotes();
    }

    render() {
        return (
            <div>
                <h1>Explore</h1>
                <Card 
                    author={this.props.randomQuote.quoteAuthor}
                    quote={this.props.randomQuote.quoteText}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        randomQuote: state.randomQuote
    }
}


export default connect(mapStateToProps, actions)(ExplorePage);