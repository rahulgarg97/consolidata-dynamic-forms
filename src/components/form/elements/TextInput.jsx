import React from 'react';
import PropTypes from 'prop-types';



const TextInput = (props) => {
  

  return <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <input type="text" name={props.name} id={props.id} className="form-control" disabled={props.disabled} defaultValue={props.defaultValue}/>
  </div>
}


TextInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
}

export default TextInput