// 1_1_3 fix: имя компонента Profile приведено к верхнему регистру

function Profile() {
  return (
    <img src="AlanHart.jpg" alt="Alan L. Hart" />
  );
}

export default function Gallery() {
  return (
    <section>
      <h1>Amazing scientists</h1>
      <Profile />
      <Profile />
      <Profile />
    </section>
  );
}
