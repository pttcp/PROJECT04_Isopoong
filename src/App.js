import { Route, Routes } from "react-router-dom";
import "./css/App.css";

// import Header from "./pages/Header";
import Intro from "./pages/Intro";
import Facility from "./pages/Facility";
import Detail from "./pages/Detail";
import Review from "./pages/Review";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Facility" element={<Facility />}></Route>
        <Route path="/Detail/:id" element={<Detail />}></Route>
        <Route path="/Review" element={<Review />}></Route>
      </Routes>
    </div>
  );
}

export default App;
