import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Header from './components/Header';
import { lazy, Suspense } from 'react';

const Login = lazy( () => import('./components/Login'))
const Register = lazy(() => import('./components/Register'))
const Article = lazy( () => import('./components/Articles'))

function App() {
  return (
    <BrowserRouter>
      <Header currentUser={null} />

      {/* Neu muon su dung Lazy import thi can suspense */}
      <Suspense fallback="Loading . . ."> 
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/register" element={<Register />}/>
          <Route exact path="/login" element={<Login />}/>
          <Route exact path={"/article"} element={<Article />}/>
        </Routes>
      </Suspense>
    </BrowserRouter>
    
  );
}

export default App;
