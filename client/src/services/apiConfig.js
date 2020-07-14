import axios from 'axios'

let apiUrl

const apiUrls = {
<<<<<<< HEAD
  production: 'https://blog-app-mcs.herokuapp.com/api/products/api',
=======
  production: 'https://blog-app-mcs.herokuapp.com/api',
>>>>>>> 9619b058f2c0a3b790fad16f6cd29933914683ad
  development: 'http://localhost:3000/api'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

const api = axios.create({
  baseURL: apiUrl
})

export default api
