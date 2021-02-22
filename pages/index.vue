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
          <FontAwesomeIcon
            :icon="faGithub"
            class="icon-github"
          />
        </Button>
      </div>

      <div class="hero__install">
        <!-- <h2 class="hero__install-heading">
          Install from
        </h2> -->
        <div class="hero__install-switcher">
          <nIcon
            :class="{'active' : packageManager === 'npm'}"
            @click.native="choosePackageManager('npm')"
          >
            <FontAwesomeIcon
              :icon="faNpm"
              class="icon-npm"
            />
          </nIcon>
          <nIcon
            :class="{'active' : packageManager === 'yarn'}"
            @click.native="choosePackageManager('yarn')"
          >
            <FontAwesomeIcon
              :icon="faYarn"
              class="icon-yarn"
            />
          </nIcon>
          <nIcon
            :class="{'active' : packageManager === 'github'}"
            @click.native="choosePackageManager('github')"
          >
            <FontAwesomeIcon
              :icon="faGithub"
              class="icon-github"
            />
          </nIcon>
        </div>
        <code
          class="hero__install-code"
          v-if="packageManager === 'npm'"
        >
          npm install @naked-ui/vue
        </code>
        <code
          class="hero__install-code"
          v-if="packageManager === 'yarn'"
        >
          yarn add @naked-ui/vue
        </code>
        <code
          class="hero__install-code"
          v-if="packageManager === 'github'"
        >
          git clone https://github.com/naked-ui/vue.git
        </code>
      </div>
    </div>
  </div>
</template>

<script>
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faNpm } from '@fortawesome/free-brands-svg-icons'
import { faYarn } from '@fortawesome/free-brands-svg-icons'
import Button from '../components/atoms/Button/Button.vue'
import nIcon from '../packages/@naked-ui/vue/src/components/nIcon/nIcon.vue'

export default {
  components: {
    Button,
    nIcon
  },
  data () {
    return {
      packageManager: 'npm'
    }
  },
  computed: {
    faGithub () {
       return faGithub
    },
    faNpm () {
       return faNpm
    },
    faYarn () {
       return faYarn
    }
  },
  methods: {
    choosePackageManager (provider) {
      this.packageManager = provider
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
          grid-template-columns: repeat(3, auto);
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

    &__install {
      margin-top: 64px;
      @include flex($place: center, $direction: column);

      &-heading {
        font-weight: 400;
        font-size: 28px;
        text-align: center;
        margin-bottom: 24px;
      }

      &-switcher {
        @include grid-layout($cols: 3, $gap: 24px);
      }
      
      &-code {
        margin: 48px 0;
        padding: 24px 32px;
        background-color: var(--nui-color-feather-dark);
        border-radius: 12px;
        color: var(--nui-color-black);
      }
    }

    .icon {
      opacity: .4;

      &.active {
        opacity: 1;
      }
    }

    .fa-npm,
    .fa-yarn,
    .fa-github {
      font-size: 32px;
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
  
  .button {

    .svg-inline--fa {
      font-size: 20px !important;
      margin-left: 8px;
    }

    .fa-github {
      transform: translateY(1px) !important;
    }
  }
}
</style>
