// 2_1_1 fix: исправлен обработчик событий handleClick для корректной смены фона страницы

export default function LightSwitch() {
    function handleClick() {
      let bodyStyle = document.body.style;
      if (bodyStyle.backgroundColor === 'black')
        bodyStyle.backgroundColor = 'white';
      else
        bodyStyle.backgroundColor = 'black';
    }
  
    return (
      <button onClick={handleClick}>Toggle the lights</button>
    );
  }