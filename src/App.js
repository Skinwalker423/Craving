import { Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import NavBar from "./routes/Navbar";


function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Home />} />
        </Route> 
      </Routes>
    </div>
  );
}

export default App;
