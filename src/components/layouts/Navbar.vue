<template>
  <nav class="level is-mobile" role="navigation" aria-label="main navigation">
    <div class="level-left">
      <router-link to="/" class="level-item has-margin-left-10">
        <i class="far fa-image fa-3x"></i>
        <strong class="is-size-4 has-padding-left-10">C-Photos</strong>
      </router-link>
    </div>
    <div class="level-right">
      <router-link to="/about" class="level-item has-margin-right-10">
        <b-tooltip label="About" position="is-left" type="is-dark">
          <i class="fas fa-info-circle fa-2x"></i>
        </b-tooltip>
      </router-link>
    </div>
  </nav>
</template>


