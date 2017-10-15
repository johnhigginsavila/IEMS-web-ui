import React from 'react';
import PropTypes from 'prop-types';

const AnchorLinkToggle = (props) => {
  const {toggle, toggleTrue, toggleFalse, onToggle } = props;
  return (
    <div style={{color: '#007bff', cursor: 'pointer'}}>
      {
        (toggle) ? 
        <span onClick={onToggle.bind(this)}>{toggleTrue}</span>
        :
        <span onClick={onToggle.bind(this)}>{toggleFalse}</span>
      }
    </div>
  );
}

AnchorLinkToggle.proptype = {
  toggle: PropTypes.bool,
  toggleTrue: PropTypes.string,
  toggleFalse: PropTypes.string,
  onToggle: PropTypes.func
}

export default AnchorLinkToggle;
