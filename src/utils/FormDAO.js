import { fireDB } from './firebase';

export default class FormDAO{

    static getAllForms = () => {
        return FormDAO._get(`forms`);
    }
    
    static getForm = (formId) => {
        return FormDAO._get(`forms/${formId}`);
    }
    static submitResponse = (formId, response) => {
        return FormDAO._create(`responses/${formId}`, response);
    }

    static getResponse = (formId) => {
        return FormDAO._get(`responses/${formId}`);
    }

    static addForm = (metaData) => {
        return FormDAO._create(`forms`, metaData);
    }

    static editForm = (formId, metaData) => {
        return FormDAO._update('forms', formId, metaData);
    }







    static _create = (node, data) => {
        return new Promise((resolve, reject) => {
            fireDB.ref(node).push(data, (err) => !!err && reject(err)).then(a=>resolve(a.key));
        })
    }

    static _get = async (node) => {
        return fireDB.ref(node).get();
    }

    static _update = async (node, id, data) => {
        return new Promise((resolve, reject) => {
            fireDB.ref(`${node}/${id}`).set(data, (err) => !!err && reject(err)).then(a=>resolve(a));
        });
    }

    static _remove = async (node, id) => {
        return new Promise((resolve, reject) => {
            fireDB.ref(`${node}/${id}`).remove((err) => !!err && reject(err)).then(a=>resolve(a));
        });
    }
}