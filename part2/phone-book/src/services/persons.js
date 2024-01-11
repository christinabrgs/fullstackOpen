import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const getAll = () => {
    const request = axios.get(baseUrl)
    return request.then(response => response.data)
}

const create = newContact => {
    const request = axios.post(baseUrl, newContact)
    return request.then(response => response.data)
}

const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject)
    return request.then(response => response.data)
}

const remove = id => {
    const request = axios.delete(`${baseUrl}/${id}`);
    return request.then(response => {
      console.log('Resource deleted successfully:', response.data);
      return response.data;
    });
  };

const catchError = (error) => {
    console.error("Error:", error);
    // Handle error, e.g., show an alert or update state
    alert("An error occured. Please try again.");
}


export default { getAll, create, update, catchError, remove }