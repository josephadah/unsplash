<template>
  <div>
    <form @submit.prevent="search">
      <div class="field">
        <div class="control has-icons-left">
          <input v-model="searchQuery" class="input" type="text" placeholder="Search photo ...">
            <span class="icon is-small is-left">
              <i class="fas fa-search"></i>
            </span>
        </div>
      </div>
    </form>
    <div class="has-margin-top-10">
      <div v-if="searching" class="has-margin-left-50">
        <p class="is-size-4">Searching <span class="has-text-grey">{{lastSearchQuery}}</span></p>
      </div>
      <div v-if="!searching && lastSearchQuery" class="has-margin-left-50">
        <p class="is-size-4">Search Results for <span class="has-text-grey">"{{lastSearchQuery}}"</span></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchForm',
  props: {
    searching: Boolean
  },
  data() {
    return {
      searchQuery: '',
      lastSearchQuery: ''
    }
  },
  methods: {
    search() {
      this.searchQuery = this.searchQuery.trim();
      if (this.searchQuery) {
        this.$emit('search-photos', this.searchQuery);
        this.lastSearchQuery = this.searchQuery;
        this.searchQuery = '';
      }
    }
  }
}
</script>

