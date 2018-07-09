# RestErrors

[![npm](https://img.shields.io/npm/v/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)
 [![npm](https://img.shields.io/npm/dm/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)
[![npm](https://img.shields.io/npm/l/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)

Rest oriented set of errors.

## Requirements

- `node >= 7.10`
- `typescript >= 2.4`

## Installation

`npm i @bluejay/rest-errors`;

## Usage

```typescript
import * as RestErrors from '@bluejay/rest-errors';

const err = new RestErrors.BadRequest('Something went wrong.', { some: { meta: 'data' } });
RestErrors.isRestError(err); // true
```

## Documentation

See [Github Pages](https://bluebirds-blue-jay.github.io/rest-errors/).
