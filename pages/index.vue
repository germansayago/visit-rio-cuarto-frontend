<template>
  <div class="container">
    <section class="section">
      <div class="jumbotron">
        <h1>{{ titlePage.toUpperCase() }}</h1>
        <div class="form-group">
          <input
            v-model="searchQuery"
            type="text"
            class="form-control form-control-lg"
            placeholder="Que querés hacer?"
          >
        </div>
        <button @click="search" class="btn btn-success btn-lg">buscar</button>
        <button @click="clean" class="btn btn-info btn-lg">reset</button>
      </div>

      <div v-if="searchMessage > 0" class="row">
        <div class="col">
          <div class="alert alert-success">
            Se han encontrado {{ searchMessage }} resultados
          </div>
        </div>
      </div>

      <div class="row">
        <div class="col">
          <div v-for="(e, index) in events" :key="index" class="card mb-3">
            <div class="card-body">
              <h3 class="card-title">{{ e.title }}</h3>
              <p>{{ e.place }}</p>
            </div>
            <div class="card-footer">
              <p>{{ e.category }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
const events = [
  {
    title: 'La noche de los museos',
    place: 'Museo de Bellas Artes',
    category: 'Cultura y Espectáculos'
  },
  {
    title: 'Expo turismo',
    place: 'Sociedad Rural de Río Cuarto',
    category: 'Turismo'
  },
  {
    title: 'Estudiantes vs Belgrano',
    place: 'Asociación Atlética Estudiantes',
    category: 'Deportes'
  }
]

export default {
  data () {
    return {
      titlePage: 'Viví la experiencia!',

      searchQuery: '',

      events: []
    }
  },

  computed: {
    searchMessage () {
      return `${this.events.length}`
    }
  },

  methods: {
    search () {
      this.events = events
    },

    clean () {
      this.events = []
    }
  }
}
</script>

<style lang="scss">
  body{
    background-color: #fff;
  }
</style>
