import { removeStoreCodeFromRoute, currentStoreView, localizedDispatcherRouteName } from '@vue-storefront/core/lib/multistore'
import { Payload } from '../types/Payload'

export const forCategory = async ({ dispatch }, { url }: Payload) => {
  const { storeCode, appendStoreCode } = currentStoreView()
  url = (removeStoreCodeFromRoute(url.startsWith('/') ? url.slice(1) : url) as string)
  try {
    const category = await dispatch('category/single', { key: 'url_path', value: url }, { root: true })
    if (category !== null) {
      return {
        name: localizedDispatcherRouteName('category', storeCode, appendStoreCode),
        params: {
          slug: category.slug
        }
      }
    }
  } catch {
    return undefined
  }
}
