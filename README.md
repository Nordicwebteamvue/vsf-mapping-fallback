# vsf-mapping-fallback

Modular mapping fallback for Vue Storefront.

https://docs.vuestorefront.io/guide/basics/url.html#how-to-customize-the-mapping-mechanism

## Usage

Clone this repository to `src/modules/vsf-mapping-fallback` and use it like below

```js
import { extendMappingFallback, Payload } from 'src/modules/vsf-mapping-fallback'
import { forProduct, forCategory, tap } from 'src/modules/vsf-mapping-fallback/builtin'
import { forStoryblok } from './vsf-storyblok-module/mappingFallback'

export const forDemo = async (context, { url, params }: Payload) => {
  if (url === 'demo') {
    return {
      name: 'category',
      redirect: '/posters'
    }
  }
}

const extendUrlModule = extendMappingFallback(
  forDemo, forProduct, forCategory, forStoryblok, tap
)

export function registerClientModules () {
  registerModule(UrlModule)
  registerModule(extendUrlModule)
  ...
}
```


## Builtins

### `forProduct`

The default mappingFallback for products

### `forCategory`

The default mappingFallback for categories

### `tap`

Prints payload to console
