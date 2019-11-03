<template>
  <div class="container">
    <section class="section">
      <div class="jumbotron">
        <h1>{{ titlePage.toUpperCase() }}</h1>
      </div>
    </section>
  </div>
</template>

<script>
import axios from 'axios'
axios.defaults.headers.common.Accept = 'application/json'

export default {
  data () {
    return {
      titlePage: 'Viví la experiencia'
    }
  }
}
</script>

<style lang="scss">
  body{
    background-color: #fff;
  }
</style>
