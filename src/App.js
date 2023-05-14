import logo from './logo.svg';
import './App.css';
import Button from './featurs/button';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Images from './images';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
       
            <Routes>
     <Route path='/' element={<Button/>}/>
     <Route path='/image' element={<Images/>}/>
    </Routes>
    </div>
    </BrowserRouter>

  );
}

export default App;
