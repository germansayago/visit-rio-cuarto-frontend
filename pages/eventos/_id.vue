<template>
  <div class="main">
    <div class="container">
      <div class="jumbotron">
        <h1 class="display-4">
          {{ event.title }}
        </h1>
        <p class="lead">
          This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.
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
