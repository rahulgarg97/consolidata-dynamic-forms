import React , {useState, useEffect} from 'react';
import PropagateLoader from "react-spinners/PropagateLoader";
import FormDAO from "../../utils/FormDAO";
import ResponseCard from '../ResponseCard';


const ResponseList = (props) => {
    const [responses, setResponses] = useState({});
    const [loadingData, setLoadingData] = useState(true);


    useEffect(() =>{ 
        const formId = props?.match?.params?.id.trim();
        if(!formId || formId === ''){
            setResponses({});
            return;
        }
        FormDAO.getResponse(formId).then(snapshot => {
            let value = snapshot.val();
            setResponses(value ?? {});
            setLoadingData(false);
        });
    }, [props?.match?.params?.id])
    return <>{loadingData ? <div className='pageCenter'><PropagateLoader/></div> : Object.keys(responses).length > 0 ? <div class="table">
        <div className='response-page-header'><strong>Response Count : </strong> {Object.keys(responses).length}</div>
        {Object.keys(responses).map((id, index) => <ResponseCard key={id} index={index+1} data={responses[id]}/>)}
    </div> : <div className='pageCenter'>No responses found. <br/> <a href="/">Go Home</a></div>}</>;
}

export default ResponseList;