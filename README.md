# time-hooks

> This library provides hooks to efficiently manager timer and other related time logic.

[![NPM](https://img.shields.io/npm/v/time-hooks.svg)](https://www.npmjs.com/package/time-hooks) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save time-hooks
```

## Usage

### useTimer

```jsx
import { useTimer } from 'time-hooks';

// ...
const [timer, start, stop, clear] = useTimer(1000);
// ...
```

### useCountdownTimer

```jsx
import { useCountdownTimer } from 'time-hooks';

// ...
const [countdown, start, stop, clear] = useCountdownTimer(15 * 60 * 1000, 1000);
// ...
```

## License

MIT © [nubinub](https://github.com/nubinub)
