<template>
  <div>
    <div class="photo-container shadow border-radius-10 cursor-pointer" @click="isCardModalActive = true">
      <img class="image border-radius-10" :src="photo.urls.regular" alt="Placeholder image">
      <div class="author-details">
        <p class="is-size-6">{{photo.user.name}}</p>
        <p class="is-size-7">{{photo.user.location}}</p>
      </div>
      <div class="overlay"></div>
    </div>

    <b-modal :active.sync="isCardModalActive" :width="640" scroll="keep">
        <div class="card shadow border-radius-10">
            <div class="card-image">
              <figure class="image">
                <img class="modal-image" :src="photo.urls.regular" alt="Image">
              </figure>
            </div>
            <div class="card-content">
                <div class="content has-margin-left-20 has-margin-bottom-20">
                  <strong>{{photo.user.name}}</strong> <br>
                  <small class="is-size-7 has-text-grey-light">{{photo.user.location}}</small>
                </div>
            </div>
        </div>
    </b-modal>

  </div>
</template>

<script>
export default {
  name: 'PhotoItem',
  props: {
    photo: Object
  },
  data() {
    return {
      isCardModalActive: false
    }
  }
}
</script>

<style lang="scss" scoped>
  .photo-container {
    position: relative;
    &:hover {
      transform: scale(1.05);
    }

    .image {
      min-height: 100px;
    }

    .author-details {
      position: absolute;
      bottom: 15px;
      left: 20px;
      color: #fff;
      z-index: 3;
    }
    .overlay {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 80px;
      border-radius: 0 0 10px 10px;
      background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.3) 40%);
      color: #f1f1f1;
      z-index: 2;
    }
  }
  .modal-image {
    border-radius: 10px 10px 0 0;
  }
</style>

