import axios from 'axios'
import configService from './config'

const visitEventsService = axios.create({
  baseUrl: configService.apiEventsUrl
})

export default visitEventsService
