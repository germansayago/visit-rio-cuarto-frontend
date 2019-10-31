<template>
  <div class="container">
    <loading v-if="loading" />
    <div v-for="event in events" :key="event.id" class="event">
      <div>titulo <b>{{ event.id }}</b></div>
      <div>titulo <b>{{ event.title }}</b></div>
      <div>group_id <b>{{ event.group_id }}</b></div>
      <div>state <b>{{ event.state }}</b></div>
      <nuxt-link :to="`/events/${event.id}`">
        ver
      </nuxt-link>
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
          events: res.data.result,
          loading: false
        }
      })
  }
}
</script>
