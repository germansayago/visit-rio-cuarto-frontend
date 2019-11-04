<template>
  <div role="main" class="main flex-shrink-0">
    <div class="container">
      <div class="jumbotron">
        <img :src="`${event.file.path}${event.id}/${event.file.file}`" alt="" class="img-fluid">
        <h1 class="display-4">
          {{ event.title }}
        </h1>
        <p class="lead">
          {{ event.summary }}
        </p>
        <hr class="my-4">
        <p>
          It uses utility classes for typography and spacing to space content out within the larger container.
        </p>
        <a class="btn btn-primary btn-lg" href="/" role="button">Volver</a>
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
      event: null,
      loading: true
    }
  },

  asyncData ({ params, error }) {
    return axios.get(`http://admin.visitriocuarto.com/api/events/${params.id}`)
      .then((res) => {
        return {
          event: res.data.data,
          loading: false
        }
      })
  }
}
</script>
