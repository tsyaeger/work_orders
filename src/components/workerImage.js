import React from 'react';

const WorkerImage = ({img})=> {
  return (
    <div id='img-wrapper' className='details-wrapper'>
      <img class='worker-img' src={img} alt='worker-pic'/>
    </div>)
}
export default WorkerImage;
