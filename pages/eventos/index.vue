<template>
  <div class="main">
    <div class="container">
      <div class="card-columns">
        <div v-for="event in events" :key="event.id">
          <div v-if="event.state === 1 | event.group_id === 1" class="card">
            <div class="card-header">
              {{ event.calendars[0].start_date }}
            </div>
            <img :src="`${event.file.path}${event.id}/${event.file.file}`" alt="" class="img-fluid">
            <div  class="card-body">
              <h3 class="card-title">
                {{ event.title }}
              </h3>
              <p class="card-text">
                {{ event.summary }}
              </p>
              <p class="card-text">
                {{ event.place.name }}
              </p>
            </div>
            <div class="card-footer">
              <nuxt-link :to="`/eventos/${event.id}`" class="btn btn-sm btn-outline-primary">
                ver
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
      <loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading
  },

  data () {
    return {
      events: [],
      loading: true
    }
  },

  asyncData ({ params, error }) {
    return axios.get(`http://admin.visitriocuarto.com/api/events`)
      .then((res) => {
        return {
          events: res.data.data,
          loading: false
        }
      })
  }
}
</script>
