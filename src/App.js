import { Route, Routes } from "react-router-dom";
import "./css/App.css";

// import Header from "./pages/Header";
import Intro from "./pages/Intro";
import Facility from "./pages/Facility";

function App() {
  return (
    <div className="App">
      {/* <Intro /> */}
      <Routes>
        <Route path="/" element={<Intro />}></Route>
        <Route path="/Facility" element={<Facility />}></Route>
      </Routes>

      {/* <Header /> */}
    </div>
  );
}

export default App;
