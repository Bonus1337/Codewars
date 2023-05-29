# Count Sheep

## Description

In this task, we are given an array/list of sheep where some sheep may be missing from their place. The goal is to create a function that counts the number of sheep present in the array (`true` means the sheep is present).

For example, consider the following array:

```typescript
[
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];
```

The correct result would be 17, since there are 17 `true` values in the array, each representing a present sheep.

Don't forget to check for bad values like `null` or `undefined` in your implementation.

## Usage

Here's an example of how to use the `countSheeps` function:

```typescript
import { countSheeps } from "./solution";

var array1 = [
  true,
  true,
  true,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  true,
  false,
  true,
  false,
  false,
  true,
  true,
  true,
  true,
  true,
  false,
  false,
  true,
  true,
];

const result1 = countSheeps(array1);
console.log(result1); // outputs: 17
```

## Testing

This repository uses Jest for testing. To run the tests, use the following command:

```bash
npm jest index.test.ts
```
