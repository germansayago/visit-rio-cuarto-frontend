<template>
  <div class="container">
    <div v-for="event in events" :key="event.id" class="event">
      {{ event.title }}
      <nuxt-link :to="`/events/${event.id}`">
        ver
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      events: []
    }
  },
  asyncData ({ params, error }) {
    return axios.get(`http://admin.visitriocuarto.com/api/events`)
      .then((res) => {
        return {
          events: res.data.result
        }
      })
  }
}
</script>

<style>
.container{
  width: 920px;
  margin: auto;
  text-align: center;
}
.event{
  margin-bottom: 8px;
  background-color: #ccc;
  padding: 4px;
}
</style>
