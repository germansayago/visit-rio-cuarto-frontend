<template>
  <div>
    <hero />
    <div class="main">
      <div class="container">
        <h1 class="text-center mb-5 display-4">eventos recomentados</h1>
        <div class="card-columns">
          <div v-for="event in events" :key="event.id">
            <div v-if="event.group == 1 && event.state == 1" class="card mb-4">
              <img :src="`${event.file.path}/${event.file.file}`" alt="" class="img-fluid">
              <div  class="card-body">
                <h3 class="card-title">
                  {{ event.title }}
                </h3>
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
        <div v-if="loading">Cargando....</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Hero from '~/components/home/tHero.vue'

export default {
  components: {
    Hero
  },

  data () {
    return {
      events: [],
      loading: false
    }
  },

  asyncData ({ params, error }) {
    return axios.get(`https://visitariocuarto.gob.ar/api/events`)
      .then((res) => {
        return {
          events: res.data.data,
          loading: false
        }
      })
  }
}
</script>
