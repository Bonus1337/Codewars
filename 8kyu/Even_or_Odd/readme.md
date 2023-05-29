# CodeWars Task: Even or Odd

This repository contains a task from CodeWars that requires creating a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

## Task Description

Create a function `even_or_odd` that takes an integer `n` as an argument and returns "Even" if `n` is even, and "Odd" if `n` is odd.

## Example

```typescript
even_or_odd(2); // Returns "Even"
even_or_odd(0); // Returns "Even"
even_or_odd(7); // Returns "Odd"
even_or_odd(1); // Returns "Odd"
even_or_odd(-4); // Returns "Even"
even_or_odd(-3); // Returns "Odd"
```

## Implementation

Open the `index.ts` file and implement the `even_or_odd` function according to the task requirements. The function should have the following signature:

```typescript
function even_or_odd(n: number): string {
  // Implement the logic here
}
```

## Testing

The project uses the `jest` assertion library for testing. The test cases are defined in the `index.test.ts` file. You can run the tests at any time to verify the correctness of your implementation.

## Submission

Once you have completed the task, you can submit your solution to CodeWars.
