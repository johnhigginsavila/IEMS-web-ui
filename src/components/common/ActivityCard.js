import React from 'react';
// import Proptypes from 'proptypes';

const ActivityCard = (props) => {
  return (
    <div className="col-lg-4 col-sm-12" style={{margin: '0rem', display: 'flex', marginTop: '1rem'}}>
      <div className="card">
        <div className="card-body text-primary">
          <h4 className="card-title">Activity Name</h4>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="" className="card-link">View</a>
        </div>
      </div>
    </div>
  );
}
export default ActivityCard;