// 2_2_4 fix: удалено лишнее состояние из FeedbackForm для исправления логики приветствия

export default function FeedbackForm() {
  function handleClick() {
    const name = prompt('What is your name?') ?? "";
    alert(`Hello, ${name}!`);
  }

  return <button onClick={handleClick}>Greet</button>;
}