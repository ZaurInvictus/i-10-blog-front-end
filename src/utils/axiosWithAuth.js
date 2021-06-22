import axios from "axios"

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token")

  return axios.create({
    headers: {
      'Content-Type':'application/json',
       token: token
      // Authorization: token
    },
    baseURL: process.env.REACT_APP_API_URL + '/api/'
    // baseURL: "http://localhost:5000/api/"
  })
}