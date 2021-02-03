<template>
  <div class="container">
    <Logo />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.container {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @include flex($place: center);
}
.logo {
  padding: 0 32px;
  text-align: center;
  font: 800 8vw/48px 'Inter';
  letter-spacing: -0.4vw;
  @include media('<=ms') {
    font: 800 60px/60px 'Inter';
    letter-spacing: -2px;
  }
}
</style>
