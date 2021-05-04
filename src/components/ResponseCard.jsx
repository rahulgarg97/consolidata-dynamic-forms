import React  from 'react';
import moment from 'moment';

const ResponseCard = (props) => {
    console.table(props.data);

    return <div class="card mb-3">
    <div className="row no-gutters">
      <div className="col-md-2 response-card-index">
        <div className='centerDiv'>#{props.index}</div>
      </div>
      <div className="col-md-10">
        <div className="card-body">
            {Object.keys(props.data).filter(key => !!key && key !== 'createdAt').map(key => <p className="card-text" key={key}><strong>{key} :</strong> {props.data[key]}</p>)}
            <p className="card-text"><small className="text-muted">Submitted {props.data.createdAt ? moment(props.data.createdAt).fromNow():'sometime ago'}</small></p>
        </div>
      </div>
    </div>
  </div>;
}
export default ResponseCard;