// 1_2_1 refactor: компонент Profile перемещён в отдельный файл

import Gallery from "./Gallery";
import Profile from "./Profile";

export default function App() {
  return (
    <div>
      <Profile /> 
      <Gallery /> 
    </div>
  );
}

