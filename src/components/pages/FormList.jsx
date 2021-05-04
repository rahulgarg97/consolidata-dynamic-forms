import React , {useState, useEffect} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import FormDAO from "../../utils/FormDAO";


const FormList = (props) => {
    const [forms, setForms] = useState({});
    const [loadingData, setLoadingData] = useState(true);


    useEffect(() =>{ 
        FormDAO.getAllForms().then(snapshot => {
            let value = snapshot.val();
            setForms(value ?? {});
            setLoadingData(false);
        });
    }, [])
    return <>
        {loadingData ? <div className='pageCenter'><PropagateLoader/></div> : Object.keys(forms).length > 0 ? <table className="table  table-striped">
            <thead>
            <tr>
                <th scope="col"><p className="text-center">#</p></th>
                <th scope="col"><p className="text-center">Name</p></th>
                <th scope="col"><p className="text-center">Created By</p></th>
                <th scope="col"><p className="text-center">Actions</p></th>
            </tr>
            </thead>
            <tbody>
                {Object.keys(forms).map((id, index) => <tr key={id}>
                        <th scope="row"><p className="text-center">{index + 1}</p></th>
                        <td><p className="text-center">{forms[id].name}</p></td>
                        <td><p className="text-center">{forms[id].createdby ?? "-" }</p></td>
                        <td style={{justifyContent:"space-evenly", display: "flex"}}> 
                            <a href={`/form/${id}`} title='Open Form'>
                                <i className="fa fa-external-link action-icon" aria-hidden="true"></i>
                            </a>
                            <a href={`/edit/${id}`} title='Edit Form'>
                                <i className="fa fa-pencil-square-o action-icon" aria-hidden="true"></i>
                            </a>
                            <a href={`/response/${id}`} title='Form Responses'>
                                <i className="fa fa-envelope-o action-icon" aria-hidden="true"></i>
                            </a>
                        </td>
                    </tr>
                )}
            </tbody>
        </table> : <>No forms found</>}
    </>;
}

export default FormList;