import React, { Component } from 'react';

class Card extends Component {
    constructor() {
      super();
    }

  saveQuote = () => {
    this.props.saveQuoteToProfile()
  }  

  render () {
    const {author, quote} = this.props;
    return(
        <div className="row">
        <div className="col s12 ">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{author}</span>
              <p>{quote}</p>
            </div>
            <div className="card-action">
              <a onclick={this.saveQuote} href=""><i className="fa fa-plus center"></i> Save to Collection</a>
              <a href=""><i className="fa fa-facebook right"></i></a>
              <a href=""><i className="fa fa-twitter right"></i></a>
            </div>
          </div>
        </div>
      </div>
              
    )
  }
    
}

export default Card;