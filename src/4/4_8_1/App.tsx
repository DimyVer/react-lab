// 4_8_1 refactor: логика таймера перенесена в кастомный хук useCounter

import { useCounter } from "./useCounter";

export default function Counter() {
  const count = useCounter();
  return <h1>Seconds passed: {count}</h1>;
}
