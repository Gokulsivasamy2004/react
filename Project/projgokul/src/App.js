import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
     <Route path='/' element={<Login/>}/>
     <Route path='/Register' element={<Register/>}/>
     <Route path='/Home' element={<Home/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
