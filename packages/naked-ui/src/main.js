import * as components from './components'

const ComponentLibrary = {
  install(Vue, options = {}) {
    for (const componentName in components) {
      const component = components[componentName]

      Vue.component(component.name, component)
    }
  }
}

export default ComponentLibrary

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(ComponentLibrary)
}

export { nButton } from './components/nButton'
export { nCarousel, nCarouselItem } from './components/nCarousel'
export { nOverflowCarousel, nOverflowCarouselItem } from './components/nOverflowCarousel'