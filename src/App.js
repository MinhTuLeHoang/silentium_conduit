import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Header currentUser={null} />
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/register" element={<Register />}/>
        <Route exact path="/login" element={<Login />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
