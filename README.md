## User interface for RCC (a tweakable idea)

A template on how to create an user interface for RCC.

### How to install 🤓

```bash
git clone https://github.com/Lecter2508/rccui
```

### How to run 👾

```bash
cd /path/of/project
npm i
npm run dev
```

### How to update after a breaking change 😱

It's always a good idea to run the install command from the package manager when new packages have been installed:

```bash
cd /path/of/project
npm i
```

To see if new packages have been installed, consult the package.json for any changes:

```bash
cd /path/of/project
nano package.json
```

### How to test the rccCalculator function 🤓

```bash
cd /path/of/project
npm run test
```

### Vitest to write better code

To create a test file, add `.test.js` after the file name.

[Vitest doc](https://vitest.dev/)

Quick example :

```javascript
// sum.js
export function sum(a, b) {
  return a + b
}
```

```javascript
// sum.test.js
import { expect, test } from 'vitest'
import { sum } from './sum'

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3)
})
```
