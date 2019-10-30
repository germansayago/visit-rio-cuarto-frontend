<template>
  <div class="container">
    <div>
      <h1>About</h1>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(`http://admin.visitriocuarto.com/api/events/3`)
    return { title: data.result.title, summary: data.result.summary, organizer: data.result.organizer }
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
