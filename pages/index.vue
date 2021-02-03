<template>
  <div
    id="home"
    class="page"
  >
    <div id="hero">
      <Logo />
      <Button
        link="https://docs.naked-ui.org"
        target="_blank"
      >
        See docs
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
#hero {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @include flex($place: center, $direction: column);
}

.logo {
  padding: 0 32px;
  text-align: center;
  font: 800 8vw/8vw 'Inter';
  height: 8vw;
  letter-spacing: -0.4vw;
  @include media('<=ms') {
    font: 800 60px/60px 'Inter';
    height: 60px;
    letter-spacing: -2px;
  }
}

.n-button {
  margin-top: 48px;
}
</style>
