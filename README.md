# RestErrors

Rest oriented set of errors.

## Requirements

- `node >= 7.10`
- `typescript >= 2.4`

## Installation

`npm i @bluejay/rest-errors [--save]`;

## Usage

```typescript
import * as RestErrors from '@bluejay/rest-errors';

new RestErrors.BadRequest('Something went wrong.', { some: { meta: 'data' } });
```

Using the named exports.

```typescript
import { RestErrors } from '@bluejay/rest-errors';

new RestErrors.BadRequest('Something went wrong.', { some: { meta: 'data' } });
```

```typescript
import { BadRequestRestError } from '@bluejay/rest-errors';

new BadRequestRestError('Something went wrong.', { some: { meta: 'data' } });
```