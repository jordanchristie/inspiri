import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';

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
    this.props.removeQuoteFromProfile(id)
  }

  render () {
    const {author, quote, isSaved} = this.props;
    return(
        <div className="row">
        <div className="col s12">
          <div className="card blue-grey darken-1">
            <Content>
              <Author className="card-title">{author}</Author>
              <Quote>{quote}</Quote>
            </Content>
            <Actions>
              { isSaved ? 
                <SaveToggle onClick={this.removeQuote}>
                  <i className="fa fa-times center"></i>
                  Remove Quote
                </SaveToggle> 
                :
                <SaveToggle onClick={this.saveQuote}>
                  <i className="fa fa-plus center"></i>
                  Save Quote 
                </SaveToggle>
              } 
              <Social>
                <li><i className="fa fa-facebook"></i></li>
                <li><i className="fa fa-twitter"></i></li>
              </Social>
            </Actions>
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

const Content = styled.article.attrs({
  className: 'card-content white-text'
})``

const Author = styled.span`

`

const Quote = styled.p`

`

const Actions = styled.article.attrs({
  className: 'card-action'
})`
  color: white;
`

const SaveToggle = styled.p`
  cursor: pointer;
`

const Social = styled.ul`
  width: 30%;
  display: flex;
  justify-content: space-evenly;
  cursor: pointer;
`