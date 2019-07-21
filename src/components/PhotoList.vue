<template>
  <div>
    <div class="columns is-multiline is-centered has-margin-top-10">
      <div v-for="(photo, index) in photos" :key="photo.id" class="column is-4">
        <PhotoItem :photo="photo" :index="index"/>
      </div>
    </div>
  </div>
</template>

<script>
import PhotoItem from './PhotoItem'

export default {
  name: 'PhotoList',
  components: {
    PhotoItem
  },
  props: {
    photos: Array
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
</style>
