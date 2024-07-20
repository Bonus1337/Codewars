# Rock Paper Scissors!

## Description

This TypeScript project is a simple implementation of the classic game "Rock Paper Scissors." The task is to create a function `rps` that will take two parameters: `p1` and `p2`, which represent the moves of player 1 and player 2 respectively. The function should return the winner of the game or state if it's a draw.

### Rules:

- Rock beats Scissors
- Scissors beats Paper
- Paper beats Rock
- If both players choose the same item, the game is a draw

## Function Signature

```typescript
function rps(p1: string, p2: string): string;
```

## Usage

To use this function, import it into your TypeScript file and pass the player moves as arguments:

```typescript
import { rps } from "./rps";

console.log(rps("rock", "scissors")); // Outputs: "Player 1 won!"
console.log(rps("scissors", "rock")); // Outputs: "Player 2 won!"
console.log(rps("paper", "paper")); // Outputs: "Draw!"
```

## Installation

To set up this project locally, you will need Node.js installed on your system.

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/rock-paper-scissors-ts.git
   ```
2. Navigate into the project directory:
   ```bash
   cd rock-paper-scissors-ts
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

This project uses Jest for testing. To run the tests, execute the following command:

```bash
npm test
```

Ensure your tests cover all the possible outcomes of the game to validate the functionality effectively.

## Contributing

Contributions to this project are welcome! Please feel free to fork the repository, make improvements, and submit pull requests.

## License

This project is released under the MIT License. See the LICENSE file for more details.

---
