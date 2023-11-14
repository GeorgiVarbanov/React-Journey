import { Routes, Route } from "react-router-dom";

import Header from "./componets/Header/Header.jsx";
import Home from "./componets/Home/Home.jsx";
import Catalogue from "./componets/Catalogue/Catalogue.jsx";
import Login from "./componets/Login/Login.jsx";
import Register from "./componets/Register/Register.jsx";
import Create from "./componets/CreateGame/Create.jsx";

function App() {

  return (
    <div id="box">
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<Catalogue />} />
        <Route path="/games/create" element={<Create />} />
        <Route path="/users/login" element={<Login />} />
        <Route path="/users/register" element={<Register />} />
      </Routes>
    </div>
  )
}

export default App;
