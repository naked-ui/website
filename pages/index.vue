<template>
  <div class="container">
      <h1 class="title">
        Naked UI
      </h1>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  @include flex($place: center);
  min-height: 100vh;
}
.title {
  font: 800 8vw/48px 'Inter';
  letter-spacing: -0.4vw;
  @include media('<=ms') {
    font: 800 60px/60px 'Inter';
    letter-spacing: -2px;
  }
}
</style>
