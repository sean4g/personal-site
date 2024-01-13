import './styles/tailwind.css';
import Header from "./components/Header.js";
import HomePage from "./pages/HomePage.js"
import './styles/tailwind.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
