<template>
  <div>
    <navbar />
    <nuxt />
  </div>
</template>

<script>
import axios from 'axios'
import Navbar from '~/components/Navbar.vue'

axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*'

export default {
  components: {
    Navbar
  }
}
</script>
