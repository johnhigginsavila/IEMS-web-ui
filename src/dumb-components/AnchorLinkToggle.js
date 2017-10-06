import React from 'react';

const AnchorLinkToggle = (props) => {
  const {toggle, toggleTrue, toggleFalse, onToggle } = props;
  return (
    <div>
      {
        (toggle) ? 
        <a onClick={onToggle.bind(this)}>{toggleTrue}</a>
        :
        <a onClick={onToggle.bind(this)}>{toggleFalse}</a>
      }
    </div>
  );
}

AnchorLinkToggle.prototype = {
  toggle: React.PropTypes.bool,
  toggleTrue: React.PropTypes.string,
  toggleFalse: React.PropTypes.string,
  onToggle: React.PropTypes.func
}

export default AnchorLinkToggle;
