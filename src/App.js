import './App.css';
import { Route, BrowserRouter, Routes } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />}/>
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
