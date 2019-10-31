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
