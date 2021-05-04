import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuid } from 'uuid';

import FormElements from './FormElements';
import Utility from '../../utils/Utility';
import 'bootstrap/dist/css/bootstrap.css'

const FormRenderer = (props) => {
    
    const renderElement = (element, index) => {
        const Element = FormElements[element.type];
        element.id = element.id ??  uuid();
        return Element && <Element {...element} key={element.id}/>;
    }

    const items = props.schema?.map(renderElement).filter(el => !!el);

    const _onSubmit = (event) => {
        event.preventDefault();
        let data = Utility.collectFormInputs(event);
        props.onSubmit(data);
    }

    return <form className={props.className} onSubmit={_onSubmit} style={{ border: "20px solid #e6e7fb", display: "flex", justifyContent: "center"}}>
        <div className="form-group" style={{ width: "80%" }}>
        {items}
        {items && items.length > 0 && <div className='submit-div form-group'>
            <button type='submit' className='btn btn-primary w-100' style={{backgroundColor: "#6976da"}}>{props.submitLabel || 'Submit'}</button>
            <button className='btn btn-default' onClick={props.onCancel}>{'Cancel'}</button>
        </div>}
        </div>
    </form>;
};


FormRenderer.propTypes = {
    schema: PropTypes.array.isRequired,
    className: PropTypes.string,
    submitLabel: PropTypes.string,
    onSubmit: PropTypes.func.isRequired
};

export default FormRenderer;