<template>
  <div>
    <hero />
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md-8">
             <div class="form-group">
              <button @click="getEvents" class="btn btn-primary" v-if="!events.length">Mostrar eventos</button>
              <button @click="cleanEvents" class="btn btn-info mb-3" v-if="events.length">Limpiar eventos</button>
              <input  v-if="events.length" type="text" placeholder="Filtrar por nombre" class="form-control mb-5" v-model="title">
            </div>
            <div class="card-columns">
              <div v-for="event in searchEvent" :key="event.id">
                <div v-if="event.state === 1 | event.group === 1" class="card">
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
            <div v-if="loading">Cargando....</div>
          </div>
          <div class="col-md-4">
            <div class="container">
              <pre>{{ $data | json }}</pre>
            </div>
          </div>
        </div>
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
      title: '',
      summary: '',
      loading: false,
      errored: false
    }
  },

  methods: {
    getEvents () {
      axios
        .get(`http://admin.visitriocuarto.com/api/events`)
        .then((res) => {
          this.events = res.data.data
        })
        .catch((error) => {
          console.log(error)
          this.errored = true
        })
        .finally(this.loading = false)
    },

    cleanEvents () {
      this.events = []
      this.title = ''
    }
  },

  computed: {
    searchEvent () {
      return this.events.filter(event => event.title.includes(this.title))
    }
  }
}
</script>
