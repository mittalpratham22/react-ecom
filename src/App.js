// import Header from './components/Header';
import Home from './components/Home';
import CartDetails from './components/CartDetails';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import toast, { Toaster } from 'react-hot-toast';
import Signin from "./components/Signin";
import Login from "./components/Login"
import Error from "./components/Error"
import Protected from './components/Protected';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Signin />} />
        <Route path='/login' element={<Login />} />
        <Route path='/home' element={<Protected Component={Home}/>} />
        <Route path='/cart' element={<Protected Component={CartDetails}/>} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
