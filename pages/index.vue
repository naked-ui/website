<template>
  <div
    id="home"
    class="page"
  >
    <div class="hero">
      <Logo
        :size="68"
      />
      <div class="hero__cta">
        <Button
          class="hero__cta-link"
          link="https://docs.naked-ui.org"
          target="_blank"
        >
          Read documentation
        </Button>
        <Button
          class="hero__cta-link"
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
      
      @supports (display: grid) {
        display: grid;
        grid-gap: 24px;
        justify-items: center;
        align-items: center;
        @include media('>md') {
          grid-template-columns: repeat(2, auto);
        }
      }

      @supports not (display: grid) {
        @include flex($place: center);
        @include media('<=ms') {
          flex-direction: column;
        }

        .hero__cta-link {
          @include media('>ms') {
            margin-right: 24px;
          }
          @include media('<=ms') {
            margin-bottom: 24px;
          }
          &:last-child {
            margin: 0;
          }
        }
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
