import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import NavBar from "./components/Navbar/NavBar";
import Inventory from "./components/Inventory/Inventory";
import ManageInventories from "./components/ManageInventories/ManageInventories";
import Register from "./components/Register/Register";
import 'react-toastify/dist/ReactToastify.css';
import Login from "./components/Login/Login";
import RequireAuth from './components/RequireAuth/RequireAuth';
import { ToastContainer } from "react-toastify";
import AddNewItem from "./components/AddNewItem/AddNewItem";
import MyItems from "./components/MyItems/MyItems";
import Blogs from "./components/Blogs/Blogs";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/addNewItem" element={<AddNewItem></AddNewItem>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/manageInventories" element={
          <RequireAuth>

            <ManageInventories></ManageInventories>
          </RequireAuth>
        }></Route>
        <Route path="/myItems" element={
          <RequireAuth>

            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path="/inventory/:id" element={<Inventory></Inventory>}></Route>
        <Route path="/*" element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <ToastContainer></ToastContainer>
      <Footer></Footer>
    </>
  );
}

export default App;
