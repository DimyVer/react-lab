// 4_8_3 fix: вынесен useInterval из useCounter

import { useCounter } from './useCounter.ts';

export default function Counter() {
  const count = useCounter(1000);
  return <h1>Seconds passed: {count}</h1>;
}
