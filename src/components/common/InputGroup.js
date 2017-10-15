import React from 'react';
import PropTypes from 'proptypes';

const InputGroup = ({ form, label, placeholder, type }) => {
  return (
    <div className="input-group">
      <span className="input-group-addon" id={label + Date()}>{label}</span>
      <input {...form} type={type} className="form-control" placeholder={placeholder} aria-label={label} aria-describedby={label} />
    </div>
  );
}

InputGroup.proptype = {
  form: PropTypes.any,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string
};

export default InputGroup;