<template>
  <div role="main" class="main flex-shrink-0">
    <div class="container">
      <div class="row">
        <div class="col-md-8">
          <div class="jumbotron py-5">
            <img :src="`${event.file.path}${event.file.file}`" alt="" class="img-fluid mb-3">
            <h1 class="display-4">
              {{ event.title }}
            </h1>
            <p class="lead">
              {{ event.summary }}
            </p>
            <hr class="my-4">
            <div class="row">
              <div class="col-md-6">
                <b>Cuándo?</b>
                <p v-for="calendar in event.calendars" :key="calendar.index">
                  {{ event.calendars[0].start_date | moment }} ({{ event.calendars[0].start_date | moment2 }})
                </p>
              </div>
              <div class="col-md-6">
                <b>Dónde?</b>
                <p>
                  {{ event.place.name }} <br>
                  <a v-if="event.place.web" :href="`http://${event.place.web}/`" target="_blank">{{ event.place.web }}</a>
                </p>
              </div>
            </div>
            <hr class="my-4">
            <div class="mb-5">
              <a v-for="tag in event.tags" :key="tag.index" href="/eventos" class="btn btn-sm btn-outline-primary mr-2 text-uppercase">
                {{ tag.name }}
              </a>
            </div>
          </div>
        </div>
        <div class="col-md-4">
          <pre>{{ $data | json }}</pre>
        </div>
      </div>
      <loading v-if="loading" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import moment from 'moment'
import Loading from '~/components/Loading.vue'

export default {
  components: {
    Loading
  },

  data () {
    return {
      event: null,
      loading: true
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
    return axios.get(`https://visitariocuarto.gob.ar/api/events/${params.id}`)
      .then((res) => {
        return {
          event: res.data.data,
          loading: false
        }
      })
  }
}
</script>
