import React from 'react';
import OrderDetail from './orderDetail';
import WorkerDetail from './workerDetail';
import WorkerImage from './workerImage';
import './workOrdercard.css'

const WorkOrderCard = ({worker, workorder}) => {

  const deadlineDateTime = new Date(workorder.deadline)
  const deadlineFrmt = deadlineDateTime.toLocaleString()

  return(
    <div className="order-card">
      <div className="details-wrapper">
        <OrderDetail
          id={workorder.id}
          name={workorder.name}
          description={workorder.description}
          deadline={deadlineFrmt}
        />
        {
          worker &&
            <WorkerDetail
            name={worker.name}
            email={worker.email}
            companyName={worker.companyName}
            />
        }
        {
          worker && <WorkerImage img={worker.image}/>
        }

      </div>
    </div>
  )
}

export default WorkOrderCard;
