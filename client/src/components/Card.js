import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { FacebookShareButton, TwitterShareButton } from 'react-share';

import { saveQuoteToProfile, removeQuoteFromProfile } from '../actions/index';


class Card extends Component {

  saveQuote = (e) => {
    const {author, quote} = this.props
    this.props.saveQuoteToProfile({
      author,
      quote
    })
    
   
  }
  
  removeQuote = (e) => {
    const id = this.props._id
    console.log(id)
    this.props.removeQuoteFromProfile(id)
  }

  render () {
    const {author, quote, isSaved} = this.props;
    return(
        <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{author}</span>
              <p>{quote}</p>
            </div>
            <div className="card-action">
              { isSaved ? 
                <p onClick={this.removeQuote}>
                  <i className="fa fa-times center"></i>
                  Remove Quote
                </p> 
                :
                <p onClick={this.saveQuote}>
                  <i className="fa fa-plus center"></i>
                  Save Quote 
                </p>
              } 
  
              <p><i className="fa fa-facebook right"></i></p>
              <p><i className="fa fa-twitter right"></i></p>
            </div>
          </div>
        </div>
      </div>
              
    )
  }
    
}


const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveQuoteToProfile: () => dispatch(saveQuoteToProfile(ownProps)),
    removeQuoteFromProfile: (id) => dispatch(removeQuoteFromProfile(id))
  }
}
  
    

export default connect(null, mapDispatchToProps)(Card);