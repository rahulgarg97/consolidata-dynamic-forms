import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import moment from 'moment';
import FormRenderer from '../form/FormRenderer';
import FormDAO from "../../utils/FormDAO";

const FORM_STATUS = {
    LOADING_FORM : 1,
    FORM_NOT_FOUND : 1.1,
    LOADED_BUT_NOT_SUBMITTED : 2,
    AWAITING_SUBMIT_RESPONSE : 3,
    SUBMIT_SUCCESS : 4,
    SUBMIT_FAILED : 5
}

const Form = (props) => {
    const [form, setForm] = useState();
    const [showSpinner, setShowSpinner] = useState(true);
    const [submitStatus, setSubmitStatus] = useState(FORM_STATUS.LOADING_FORM);
    
    useEffect(() =>{
        const formId = props?.match?.params?.id.trim();
        if(!formId || formId === ''){
            setForm();
            return;
        }
        setSubmitStatus(FORM_STATUS.LOADING_FORM);
        FormDAO.getForm(formId).then(snapshot => {
            let value = snapshot.val();
            setForm(value);
            setSubmitStatus(value ? FORM_STATUS.LOADED_BUT_NOT_SUBMITTED : FORM_STATUS.FORM_NOT_FOUND);
            setShowSpinner(false);
        });
    }, [props?.match?.params?.id]);

    const onSubmit = (d) => {
        d.createdAt = moment().format();
        console.table(d);
        setShowSpinner(true);
        setSubmitStatus(FORM_STATUS.AWAITING_SUBMIT_RESPONSE);
        FormDAO.submitResponse(props.match.params.id.trim(), d).then(resp => {
            setSubmitStatus(FORM_STATUS.SUBMIT_SUCCESS);
            setShowSpinner(false);
        }).catch(err => {
            setSubmitStatus(FORM_STATUS.SUBMIT_FAILED);
            setShowSpinner(false);
        })
    }

    const onCancel = () => {
        setShowSpinner(true);
        window.location.href='/';
    }

    return showSpinner ? <div className='pageCenter'><PropagateLoader/></div>: <>
        {submitStatus === FORM_STATUS.LOADED_BUT_NOT_SUBMITTED && <div className="form-wrapper">
            <FormRenderer schema={form.schema} onSubmit={onSubmit} onCancel={onCancel}/>
        </div>}
        {submitStatus === FORM_STATUS.FORM_NOT_FOUND && <center>Form Not found. <br/><a href='/'>Go Home</a></center>}
        {submitStatus === FORM_STATUS.SUBMIT_SUCCESS && <center>Form Submitted Successfully. <br/><a href={window.location.href}>Submit Again.</a>  <br/><a href='/'>Go Home</a></center>}
        {submitStatus === FORM_STATUS.SUBMIT_FAILED && <center>Something went wrong  <br/><a href={window.location.href}>Try Again.</a>  <br/><a href='/'>Go Home</a></center>}
    </>;

}

export default Form;