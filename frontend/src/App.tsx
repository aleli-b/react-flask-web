import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./layout/Navbar";
import { Footer } from "./layout/Footer";
import { ContactList } from "./pages/ContactList";
import { AddContact } from "./pages/AddContact";

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-contact" element={<AddContact />} />
        <Route path="/contact-list" element={<ContactList />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
