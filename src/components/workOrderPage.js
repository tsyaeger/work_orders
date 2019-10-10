import React, {Component} from 'react';
import {getWorkOrders, getWorkers} from '../api/services';
import axios from 'axios';
import WorkOrderCard from './workOrderCard'
import WorkerNameInput from './workerNameInput'
import Toggle from './toggle'

class WorkOrderPage extends Component{

  state = {
    workorders: [],
    workers: [],
    order: "asc",
    searchStr: ''
  }

  componentDidMount(){

    getWorkOrders()
      .then((res) => {
        this.setState({
          workorders: res.data.orders
        }, workers)
      })

    const workers = () => {
      const workerIds = Object.entries(this.state.workorders)
        .map((order) => order[1].workerId)
        .filter((value, index, self) => {
          return self.indexOf(value) === index
        })
      getWorkers(workerIds).then((newWorkers) => {
          this.setState({workers: newWorkers})
      })
    }
  }

  handleSwitch = () => {
    let newOrder = this.state.order == 'asc' ? 'dsc' : 'asc'
    this.setState({order: newOrder})
  }

  sendName = searchStr => this.setState({searchStr: searchStr})

  renderWorkOrderCards = () => {

    let filteredIds = this.state.workers.filter((worker) => {
      let lowWorkerName = worker.name.toLowerCase()
      let lowSearchStr = this.state.searchStr.toLowerCase()
      return lowWorkerName.includes(lowSearchStr)
    }).map((worker) => worker.id)


    let sortOrders = () => {
      return (a, b) => {
        let comp = 0;
        if (a.deadline > b.deadline) {
          comp = 1;
        } else if (a.deadline < b.deadline) {
          comp = -1;
        }
        return this.state.order == 'dsc' ? (comp * -1) : comp
      };
    }

    let workorders = this.state.workorders.filter((order) => {
      return filteredIds.includes(order.workerId)
    })

    let sortedOrders = workorders.sort(sortOrders())

    return sortedOrders.map((order) => {
      let worker = this.state.workers.filter((w) => w.id == order.workerId)[0]
      return <WorkOrderCard workorder={order} worker={worker} />
    })
  }


  render(){
    return(
      <div id='work-page'>
        <WorkerNameInput
          handleSearch={this.handleSearch}
          sendName={this.sendName}
          searchStr={this.state.searchStr}/
        >
        <Toggle
          status={this.state.order}
          handleSwitch={this.handleSwitch}
        />
        <div className='cards-wrapper'>{this.renderWorkOrderCards()}</div>
      </div>
    )
  }
};

export default WorkOrderPage;
