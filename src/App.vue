<template>
  <div class="container">
    <Navbar />
    <router-view/>
  </div>
</template>

<script>
import Navbar from './components/layouts/Navbar'

export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

