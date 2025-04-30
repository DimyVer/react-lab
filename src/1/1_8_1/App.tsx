// 1_8_1 fix: исправлен компонент Clock для корректного переключения светлого и тёмного режимов

export default function ClockWrapper() {
  return <Clock time={new Date()} />;
}

function Clock({ time }: { time: Date }) {
  const hours = time.getHours();
  const className = hours >= 0 && hours < 6 ? "night" : "day";
  return <h1 className={className}>{time.toLocaleTimeString()}</h1>;
}

