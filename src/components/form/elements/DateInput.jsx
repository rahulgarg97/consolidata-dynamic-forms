import React from 'react';
import PropTypes from 'prop-types';



const DateInput = (props) => {
  

  return <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input type="date" name={props.name} id={props.id} className="form-control" disabled={props.disabled} defaultValue={props.defaultValue} max={props.max} min={props.min}/>
  </div>
}


DateInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    max: PropTypes.string,
    min: PropTypes.string,
}

export default DateInput