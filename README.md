# RestErrors

[![npm](https://img.shields.io/npm/v/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)
 [![npm](https://img.shields.io/npm/dm/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)
[![npm](https://img.shields.io/npm/l/@bluejay/rest-errors.svg?style=flat-square)](https://www.npmjs.com/package/@bluejay/rest-errors)

Rest oriented set of errors.

## Requirements

- `node >= 8.6`, tested with:
 - `node@8.6.0`
 - `node@12.8.1`
- `typescript >= 4.0`, tested with:
 - `typescript@4.0.2`

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
