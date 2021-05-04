import React, { useState, useEffect } from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import FormDAO from "../../utils/FormDAO";
import Utility from '../../utils/Utility';

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
    const [errorMessage, setErrorMessage] = useState();
    
    useEffect(() =>{
        const formId = props?.match?.params?.id?.trim();
        if(!formId || formId === ''){
            setForm({});
            setSubmitStatus(FORM_STATUS.LOADED_BUT_NOT_SUBMITTED);
            setErrorMessage(undefined);
            setShowSpinner(false);
        }
        else{
            setSubmitStatus(FORM_STATUS.LOADING_FORM);
            FormDAO.getForm(formId).then(snapshot => {
                let value = snapshot.val();
                setForm(value);
                setSubmitStatus(value ? FORM_STATUS.LOADED_BUT_NOT_SUBMITTED : FORM_STATUS.FORM_NOT_FOUND);
                setErrorMessage(value ? undefined : <>Form Not found. <a href='/'>Go Home</a></>);
                setShowSpinner(false);
            });
        }
    }, [props?.match?.params?.id]);

    const onSubmitSuccess = () => {
        setSubmitStatus(FORM_STATUS.SUBMIT_SUCCESS);
        setShowSpinner(false);
    }
    const onSubmitFail = () => {
        setSubmitStatus(FORM_STATUS.LOADED_BUT_NOT_SUBMITTED);
        setErrorMessage(<>Something went wrong. Try Again or <a href='/'>Go Home</a></>);
        setShowSpinner(false);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        let metadata = Utility.collectFormInputs(event);
        if(!Utility.isJsonValid(metadata.schema)){
            setErrorMessage(<>Form Schema is not a valid JSON</>);
            return;
        }
        metadata.schema = JSON.parse(metadata.schema);
        const formId = props?.match?.params?.id?.trim();
        if(!formId || formId === '')
        {
            FormDAO.addForm(metadata).then(onSubmitSuccess).catch(onSubmitFail)
        }
        else{
            FormDAO.editForm(props.match.params.id, metadata).then(onSubmitSuccess).catch(onSubmitFail)
        }
    }

    const onCancel = () => {
        setShowSpinner(true);
        window.location.href='/';
    }

    return showSpinner ? <div className='pageCenter'><PropagateLoader/></div>: <>
        {submitStatus === FORM_STATUS.LOADED_BUT_NOT_SUBMITTED && <form className="form-wrapper" onSubmit={onSubmit}>
        {errorMessage && <div class="alert alert-danger">
            <strong>Error: </strong> {errorMessage}
        </div>}
        <div className="form-group">
            <label htmlFor='form-name'>Name</label>
            <input type="text" name='name' id='form-name' className="form-control" required defaultValue={form.name}/>
        </div>
        <div className="form-group">
            <label htmlFor='form-createdby'>Created By</label>
            <input type="text" name='createdby' id='form-createdby' className="form-control" required defaultValue={form.createdby}/>
        </div>
        <div className="form-group">
            <label htmlFor='form-schema'>{props.label}</label>
            <textarea type="text" name='schema' id='form-schema' className="form-control" rows={10} required defaultValue={JSON.stringify(form.schema,null, 4)}/>
        </div>
        <div className='submit-div form-group'>
            <button type='submit' className='btn btn-primary'>{'Save'}</button>
            <button className='btn btn-default' onClick={onCancel}>{'Cancel'}</button>
        </div>
        </form>}
        {submitStatus === FORM_STATUS.SUBMIT_SUCCESS && <center>Form Saved Successfully. <br/><a href='/'>Go Home</a></center>}
        {submitStatus === FORM_STATUS.SUBMIT_FAILED && <center>Something went wrong <a href={window.location.href}>Try Again.</a> <br/><a href='/'>Go Home</a></center>}
    </>;

}

export default Form;