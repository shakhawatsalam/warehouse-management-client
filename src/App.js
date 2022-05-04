import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Inventory from "./components/Inventory/Inventory";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
      </Routes>
    </>
  );
}

export default App;
