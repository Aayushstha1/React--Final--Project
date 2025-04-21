import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./index.css"; // Add this import
import About from "./newroutes/About";
import Home from "./newroutes/Home";
import Contactus from "./newroutes/contactus";
import Layout from "./newroutes/layout";
import Login from "./newroutes/login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Parent */}
        <Route path="/" element={<Layout />}>
          {/* Child Routes */}
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contactus" element={<Contactus />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;


