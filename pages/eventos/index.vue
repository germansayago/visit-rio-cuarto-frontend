<template>
  <div class="container">
    <div class="card-columns">
      <div v-for="event in events" :key="event.id">
        <div v-if="event.group === 1" class="card">
          <div class="card-body">
            <div>id <b>{{ event.id }}</b></div>
            <div>titulo <b>{{ event.title }}</b></div>
            <div>summary <b>{{ event.summary }}</b></div>
            <div>grupo <b>{{ event.group }}</b></div>
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
