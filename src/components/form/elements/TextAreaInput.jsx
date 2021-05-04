import React from 'react';
import PropTypes from 'prop-types';



const TextAreaInput = (props) => {
  

  return <div className="form-group">
    <label htmlFor={props.id}>{props.label}</label>
    <textarea id={props.id} name={props.name} className="form-control" disabled={props.disabled} defaultValue={props.defaultValue} rows={props.rows} cols={props.cols}/>
  </div>
}


TextAreaInput.propTypes = {
    name: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    id: PropTypes.string,
    disabled: PropTypes.bool,
    defaultValue: PropTypes.string,
    rows: PropTypes.number,
    cols: PropTypes.number,
}

export default TextAreaInput