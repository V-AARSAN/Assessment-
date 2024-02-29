import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserData from './Components/UserData';
import AddUser from './Components/AddUser';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<UserData />} />
      <Route path='/adduser' element={<AddUser/>} />
    </Routes>
  </BrowserRouter>
  </>
  );
}

export default App;
