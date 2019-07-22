<template>
    <div>

      <div class="columns is-multiline is-centered is-variable is-0-mobile">

        <div class="column is-4">
          <div class="columns is-multiline is-centered is-variable is-0-mobile">
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:250px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:350px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="columns is-multiline is-centered is-variable is-0-mobile">
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:350px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:300px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="column is-4">
          <div class="columns is-multiline is-centered is-variable is-0-mobile">
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:300px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
            <div class="column is-12">
              <div class="loader-wrapper shadow border-radius-10 has-background-light" style="height:350px;">
                <div class="user-name animated-background has-margin-left-15"></div>
                <div class="user-location animated-background has-margin-left-15"></div>
              </div>
            </div>
          </div>
        </div>

      </div>

  </div>
</template>

<style lang="scss" scoped>
  .loader-wrapper {
    width: 100%;
    position: relative;

    .user-name {
      position: absolute;
      bottom: 55px;
      width: 150px;
      height: 12px;
    }
    .user-location {
      position: absolute;
      bottom: 30px;
      width: 70px;
      height: 12px;
    }

    @keyframes placeHolderShimmer{
        0%{
            background-position: -468px 0
        }
        100%{
            background-position: 468px 0
        }
    }

    .animated-background {
        animation-duration: 1s;
        animation-fill-mode: forwards;
        animation-iteration-count: infinite;
        animation-name: placeHolderShimmer;
        animation-timing-function: linear;
        background: #f6f7f8;
        background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
        background-size: 800px 104px;
    }
  }
</style>

