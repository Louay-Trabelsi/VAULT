import logo from './logo.svg';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import SignUp from "./components/Login/SignUp"
import Login from "./components/Login/Login"
import UserList from "./components/Dashboard/UserList"
import ProductList from "./components/Dashboard/ProductList"
import Overview from "./components/Dashboard/Overview"
import { jwtDecode } from 'jwt-decode';



function App() {
  const token = localStorage.getItem('token')
  const decodedToken = token ? jwtDecode(token) : null;
  
  if (!token) {
    return (
      
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
      
    )
  }
  if (decodedToken.role === 'admin') {
    return (
      
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
          {/* <Route path='/Dashboard' element={<Dashboard />} /> */}
          <Route path='/userList' element={<UserList />} />
          <Route path='/ProductList' element={<ProductList />} />
          {/* <Route path='/Settings' element={<Settings />} /> */}
          <Route path='/Overview' element={<Overview />} />
          {/* <Route path='/AddProduct' element={<AddProduct />} /> */}
          {/* <Route path='/AddUser' element={<AddUser />} /> */}
        </Routes>
    )
  }
  if (decodedToken.role === 'user') {
    return (
        <Routes>
          <Route path='/' element={<SignUp />} />
          <Route path='/Login' element={<Login />} />
        </Routes>
    )
  }

}

export default App;
