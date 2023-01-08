import Inner from "./components/Inner/Inner";
import Home from "./components/Home/Home";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/main' element={<Inner />} />
    </Routes>
  );
}

export default App;
