import logo from "./logo.svg";
import "./App.css";
import { MainPage } from "./MainPage";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Signin } from "./Signin";
import { Signup } from "./Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/mainpage" element={<MainPage />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/" element={<Signin />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
