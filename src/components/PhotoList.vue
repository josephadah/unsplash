<template>
  <div>
    <div v-if="photos.length > 0" class="columns is-multiline is-centered is-variable is-0-mobile">
      <div v-if="column1.length > 0" class="column is-4">
        <div class="columns is-multiline is-centered is-variable is-0-mobile">
          <div v-for="photo in column1" :key="photo.id" class="column is-12">
            <PhotoItem :photo="photo"/>
          </div>
        </div>
      </div>

      <div v-if="column2.length > 0" class="column is-4">
        <div class="columns is-multiline is-centered is-variable is-0-mobile">
          <div v-for="photo in column2" :key="photo.id" class="column is-12">
            <PhotoItem :photo="photo"/>
          </div>
        </div>
      </div>

      <div v-if="column3.length > 0" class="column is-4">
        <div class="columns is-multiline is-centered is-variable is-0-mobile">
          <div v-for="photo in column3" :key="photo.id" class="column is-12">
            <PhotoItem :photo="photo"/>
          </div>
        </div>
      </div>
    </div>

    <PhotosLoader v-if="!photos || photos.length === 0" />

  </div>
</template>

<script>
import PhotoItem from './PhotoItem'
import PhotosLoader from './PhotosLoader'

export default {
  name: 'PhotoList',
  components: {
    PhotoItem,
    PhotosLoader
  },
  props: {
    photos: Array
  },
  data() {
    return {
      column1: [],
      column2: [],
      column3: []
    }
  },
  watch: {
    photos(newPhotos, oldPhotos) {
      const photos = newPhotos;
      this.column1.length = 0; this.column2.length = 0; this.column3.length = 0;
      for (let i = 1; i <= this.photos.length; i++) {
        if (i % 2 === 0 && i % 3 !== 0) {
          this.column2.push(photos[i-1]);
        } else if (i % 3 === 0) {
          this.column3.push(photos[i-1]);
        } else {
          this.column1.push(photos[i-1]);
        }
      }
    }
  }
}
</script>
