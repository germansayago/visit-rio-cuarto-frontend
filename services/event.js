import visitEventsService from './visit-events'

const eventService = {}

eventService.search = function (q) {
  return visitEventsService.get('/')
    .then(res => res.data)
}

export default eventService
