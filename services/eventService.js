import axios from 'axios'
axios.defaults.headers.common.Accept = 'application/json'

const eventService = axios.create({
  baseUrl: 'http://admin.visitriocuarto.com/api/events'
})

export default eventService
