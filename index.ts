import { extendStore } from '@vue-storefront/core/helpers'
import { Payload } from './types/Payload'
import { StorefrontModule } from '@vue-storefront/core/lib/modules';

export { Payload }

export const extendMappingFallback = (...fns) => {
  const extendUrlVuex = {
    actions: {
      async mappingFallback (context, payload: Payload) {
        for (const fn of fns) {
          const result = await fn(context, payload);
          console.log({[fn.name]: result})
          if (result) {
            return result
          }
        }
      }
    }
  }
  const extendUrlModule: StorefrontModule = function ({ store }){
    // store.registerModule('extend-url', extendUrlVuex)
    extendStore('url', extendUrlVuex);
  }
  return extendUrlModule
}
