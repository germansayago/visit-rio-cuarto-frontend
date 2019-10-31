<template>
  <div class="container">
    <div v-for="event in events" :key="event.id">
      <div v-if="event.group_id === 1" class="event">
        <div>id <b>{{ event.id }}</b></div>
        <div>titulo <b>{{ event.title }}</b></div>
        <div>group_id <b>{{ event.group_id }}</b></div>
        <div>place_id <b>{{ event.place_id }}</b></div>
        <div>state <b>{{ event.state }}</b></div>
        <nuxt-link :to="`/events/${event.id}`">
          ver
        </nuxt-link>
      </div>
    </div>
    <loading v-if="loading" />
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
