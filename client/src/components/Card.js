import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveQuoteToProfile, removeQuoteFromProfile } from '../actions/index';


class Card extends Component {

  saveQuote = (e) => {
    const {author, quote} = this.props
    e.preventDefault()
    this.props.saveQuoteToProfile({
      author,
      quote
    })
    
   
  }
  
  removeQuote = () => {
    const id = this.props._id
    this.props.removeQuoteFromProfile(id)
  }

  render () {
    const {author, quote, isSaved} = this.props;
    console.log(this.props)
    return(
        <div className="row">
        <div className="col s12 ">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{author}</span>
              <p>{quote}</p>
            </div>
            <div className="card-action">
              { isSaved ? 
                <a onClick={this.removeQuote} href="">
                  <i className="fa fa-plus center"></i>
                  Saved
                </a> 
                :
                <a onClick={this.saveQuote} href="">
                  <i className="fa fa-plus center"></i>
                  Save Quote to Collection
                </a>
              } 
              <a href=""><i className="fa fa-facebook right"></i></a>
              <a href=""><i className="fa fa-twitter right"></i></a>
            </div>
          </div>
        </div>
      </div>
              
    )
  }
    
}

const mapStatetoProps = ({isSaved}) => {
  return { isSaved }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    saveQuoteToProfile: () => dispatch(saveQuoteToProfile(ownProps)),
    removeQuoteFromProfile: () => dispatch(removeQuoteFromProfile(ownProps))
  }
}
  
    

export default connect(mapStatetoProps, mapDispatchToProps)(Card);