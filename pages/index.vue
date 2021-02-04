<template>
  <div
    id="home"
    class="page"
  >
    <div class="hero">
      <Logo
        size="72"
      />
      <div class="hero__cta">
        <Button
          link="https://docs.naked-ui.org"
          target="_blank"
        >
          Read documentation
        </Button>
        <Button
          link="https://github.com/naked-ui"
          target="_blank"
        >
          See on GitHub
          <!-- <template v-slot:button-icon--right> -->
            <FontAwesomeIcon
              :icon="faGithub"
              class="icon-github"
            />
          <!-- </template> -->
        </Button>
      </div>
    </div>
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'

export default {
  computed: {
    faGithub () {
       return faGithub
    }
  } 
}
</script>

<style lang="scss">
#home {

  .hero {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    @include flex($place: center, $direction: column);
  
    &__cta {
      margin-top: 48px;
      @include flex($place: center);
      gap: 24px;
      @include media('<=ms') {
        flex-direction: column;
      }
    }
  }
  
  .logo {
    pointer-events: none;
    @include media('>ms') {
      font: 800 8vw/8vw 'Inter';
      height: 8vw;
      letter-spacing: -0.4vw;
    }
  }
  
  .n-button {

    .icon-github {
      font-size: 18px !important;
      margin-left: 8px;
    }
  }
}
</style>
