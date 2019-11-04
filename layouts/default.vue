<template>
  <div>
    <navbar />
    <nuxt role="main" class="flex-shrink-0" />
    <t-footer />
  </div>
</template>

<script>
import Navbar from '~/components/Navbar.vue'
import tFooter from '~/components/partials/tFooter.vue'

export default {
  components: {
    Navbar,
    tFooter
  }
}
</script>
