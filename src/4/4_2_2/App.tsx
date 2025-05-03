// 4_2_2 feat: фокус на поле ввода при клике на кнопку

import { useRef } from 'react';

export default function Page() {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <nav>
        <button onClick={() => inputRef.current?.focus()}>
          Search
        </button>
      </nav>
      <input
        ref={inputRef}
        placeholder="Looking for something?"
      />
    </>
  );
}
