import * as vsComponents from './components'
import './styles/index.styl'
import vsFunctions from './functions'
// import vsTooltip from './directives/vsTooltip/vsTooltip.js'
import easing from './utils/easing.js'
import vsTheme from './utils/theme.js'

const Vuesax = {
  install(Vue, options) {
    // Register a global custom directive called `v-focus`
    Vue.directive('focus', {
      // When the bound element is inserted into the DOM...
      inserted: function (el) {
        // Focus the element
        el.focus()
      }
    })
    //change defaults colors
    if(options){
      if(options.hasOwnProperty('theme')){
        if(options.theme.hasOwnProperty('colors')){
          if (typeof window !== 'undefined') {
            vsTheme.vsfunction(options.theme.colors, options.server)
          }
        }
      }
    }

    Object.values(vsComponents).forEach((vsComponent) => {
      Vue.use(vsComponent)
    })

    vsFunctions(Vue)

    Vue.prototype.$vs.easing = easing
  }
}
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(Vuesax)
}
export default Vuesax
