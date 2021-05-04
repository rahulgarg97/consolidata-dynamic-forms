import React from 'react';
import PropTypes from 'prop-types';



const NumberInput = (props) => {
  

  return <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input type="number" name={props.name} id={props.id} className="form-control" disabled={props.disabled} defaultValue={props.defaultValue} max={props.max} min={props.min} step={props.step}/>
  </div>
}


NumberInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue:  PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
    max: PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
    min: PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
    step: PropTypes.oneOfType([ PropTypes.number, PropTypes.string]),
}

export default NumberInput