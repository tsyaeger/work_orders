import axios from 'axios';

const baseURL = ''
const api = axios.create({
  baseURL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
});



export const getWorkOrders = () => {
	return api.get('/work_orders');
}

const getWorker = (id) => {
  return api.get(`/workers/${id}`,{worker: id})
}

export const getWorkers = (workerIds) => {
  let promises = []
  workerIds.forEach((id) => {
    promises.push(getWorker(id))
  })

  return axios.all(promises).then((data) => {
    return data.reduce((acc,d) => {
      acc.push(d.data.worker)
      return acc
    },[])
  })
}
