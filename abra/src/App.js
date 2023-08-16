import { Routes, Route } from "react-router-dom";
import Generator from "./Screens/Generator";
import Favorites from "./Screens/Favorites";
import "./CSS/styles.css"
import NewNavbar from "./Components/NewNavbar";
import Context from "./Common/Context";

function App() {
  return (
    <div>
      <Context>
        <div id="menu">
          <NewNavbar />
        </div>
        <Routes>
          <Route path="/" element={<Generator />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </Context>
    </div>
  );
}

export default App;
