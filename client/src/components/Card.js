import React from 'react';

const Card = ({author, quote}) => {
    return(
        <div className="row">
        <div classNameName="col s12 m6">
          <div className="card blue-grey darken-1">
            <div className="card-content white-text">
              <span className="card-title">{author}</span>
              <p>{quote}</p>
            </div>
            <div className="card-action">
              <a href=""><i className="fa fa-plus"></i> Save to Collection</a>
            </div>
          </div>
        </div>
      </div>
              
    )
}

export default Card;