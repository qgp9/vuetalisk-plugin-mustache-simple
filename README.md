# vuetalisk-plugin-mustache-simple

## Install
```
npm i --save vuetalisk-plugin-mustache-simple
```

## Set up

In `vuetalisk.config.js`

```js
const MustacheSimple = require('vuetalisk-plugin-mustache-simple')
const words = ['base', 'github.repo', 'ga.id']

const buildApi = () =>
  init()
    .use('file-loader')
    .use('frontmatter')
    .use('filename-handler')
    .use('url-handler')
    .use(MustacheSimple, words)
    .use('data-handler')
    .use('list-handler')
    .use('api-writer')
    .use('static-handler')
    .use('cleaner')
```

## Usage

https://github.com/qgp9/mustache-simple
