import './styles/tailwind.css';
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutPage from './pages/AboutPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import MiscPage from './pages/MiscPage.jsx';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/seanport/" element={<HomePage/>} />
        <Route path="/seanport/about-me" element={<AboutPage/>} />
        <Route path="/seanport/contact-me" element={<ContactPage/>} />
        <Route path="/seanport/sean-moment" element={<MiscPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;