import { Route, Routes } from "react-router-dom";
import "./css/App.css";

// import Header from "./pages/Header";
import Intro from "./pages/Intro";
import Facility from "./pages/Facility";
import Detail from "./pages/Detail";
import { useSelector } from "react-redux";

function App() {
  // let dataset = useSelector((state) => state);
  // console.log(dataset);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Facility" element={<Facility />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
      </Routes>
    </div>
  );
}

export default App;
