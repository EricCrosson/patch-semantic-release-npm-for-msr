# patch-semantic-release-npm-for-msr
[![License][]](https://opensource.org/licenses/ISC)
[![Build Status]](https://github.com/EricCrosson/patch-semantic-release-npm-for-msr/actions/workflows/ci.yml)
[![NPM Package]](https://npmjs.org/package/patch-semantic-release-npm-for-msr)
[![semantic-release]](https://github.com/semantic-release/semantic-release)

[License]: https://img.shields.io/badge/License-ISC-blue.svg
[Build Status]: https://github.com/EricCrosson/patch-semantic-release-npm-for-msr/actions/workflows/ci.yml/badge.svg
[NPM Package]: https://img.shields.io/npm/v/patch-semantic-release-npm-for-msr.svg
[semantic-release]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg

> Patch @semantic-release/npm to unblock me on issue #414

## Install

``` shell
npm install --save-dev patch-semantic-release-npm-for-msr
```

## Use

``` typescript
npx patch-semantic-release-npm-for-msr --file node_modules/multi-semantic-release/node_modules/@semantic-release/npm/index.js
```

## Related

- [@semantic-release/npm issue #414](https://github.com/semantic-release/npm/issues/414)

## Acknowledgments

- [ts-morph](https://github.com/dsherret/ts-morph/tree/latest/packages/ts-morph)
