import React from 'react';

const WorkerDetail = ({name, email, companyName}) => {

  return (
    <div id='worker-details-wrapper' className='details-wrapper'>
      <p>{name}</p>
      <p>{email}</p>
      <p>{companyName}</p>
    </div>
  )
}

export default WorkerDetail;
