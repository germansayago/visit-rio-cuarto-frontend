<template>
  <div>
    <hero />
    <div class="main">
      <div class="container">
        <h1 class="text-center mb-5 display-4">eventos recomentados</h1>
        <div class="card-columns">
          <div v-for="event in events" :key="event.id">
            <div v-if="event.group == 1 && event.state == 1" class="card mb-4">
              <div class="card-header">
                <div class="row">
                  <div class="col-8">
                    <span class="text-uppercase">{{ event.calendars[0].start_date | moment }}</span>
                  </div>
                  <div class="col-4 text-right">
                    <span>{{ event.calendars[0].start_date | moment2 }}</span>
                  </div>
                </div>
              </div>
              <img :src="`${event.file.path}/${event.file.file}`" alt="" class="img-fluid">
              <div  class="card-body">
                <h3 class="card-title">
                  {{ event.title }}
                </h3>
                <p class="card-text">
                  Donde: <b>{{ event.place.name }}</b>
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
import moment from 'moment'
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

  methods: {
    moment () {
      return moment()
    }
  },

  filters: {
    moment (date) {
      return moment(String(date)).locale('es').format('ll')
    },
    moment2 (date) {
      return moment(String(date)).locale('es').endOf('day').fromNow()
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
