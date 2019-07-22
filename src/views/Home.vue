<template>
  <div>
    <section class="hero has-background-info has-margin-top-20">
      <div class="hero-body">
        <div class="columns is-centered">
          <div class="column has-padding-top-20 has-padding-bottom-30 is-three-quarters">
            <SearchForm :searching="searching" @search-photos="searchPhoto" />
          </div>
        </div>
      </div>
    </section>
    <section>
      <div class="main-container columns is-centered is-gapless">
        <div class="column is-two-thirds">
          <PhotoList :photos="photos" />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import PhotoList from '@/components/PhotoList.vue'
import SearchForm from '@/components/SearchForm.vue'
import { get } from '@/common/services/httpService'

export default {
  name: 'home',
  components: {
    PhotoList,
    SearchForm
  },
  data() {
    return {
      photos: [],
      searching: false
    }
  },
  mounted () {
    this.getPhotos();
  },
  methods: {
    getPhotos() {
      get()
        .then(res => {
          this.photos = res.data.results;
        })
        .catch(err => console.log(err));
    },
    searchPhoto(searchQuery) {
      this.searching = true;
      get(searchQuery)
        .then(res => {
          this.photos = res.data.results;
          this.searching = false;
        })
        .catch(err => console.log(err));
    }
  }
}
</script>

<style lang="scss">
  div.main-container {
    position: relative;
    top: -50px;
  }
</style>

