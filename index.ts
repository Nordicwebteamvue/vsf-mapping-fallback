import { extendStore } from '@vue-storefront/core/helpers'
import { Payload } from './types/Payload'

export { Payload }

export const extendMappingFallback = (...fns) => {
  const extendUrlVuex = {
    actions: {
      async mappingFallback (context, payload: Payload) {
        for (const fn of fns) {
          const result = await fn(context, payload);
          if (result) {
            return result
          }
        }
      }
    }
  }
  extendStore('url', extendUrlVuex)
}
