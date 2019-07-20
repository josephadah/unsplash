<template>
  <div>
    <section class="hero is-primary has-margin-top-50">
      <div class="hero-body">
        <div class="container">
          <div class="field">
            <div class="control has-icons-left">
              <input class="input" type="text" placeholder="Search photo ...">
                <span class="icon is-small is-left">
                  <i class="fas fa-user"></i>
                </span>
            </div>
          </div>
        </div>
      </div>
    </section>
    <PhotoList />
  </div>
</template>

<script>
// @ is an alias to /src
import PhotoList from '@/components/PhotoList.vue'

export default {
  name: 'home',
  components: {
    PhotoList
  }
}
</script>
