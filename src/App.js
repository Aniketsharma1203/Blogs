import logo from './logo.svg';
import './App.css';
import { Editorial } from './components/Editorial';
import JoditEditor from 'jodit-react';
import { Route, Routes } from 'react-router-dom';
import { Blogs } from './components/Blogs';
import { Description } from './components/Description';
import { NavBar } from './components/NavBar';


function App() {
 
  return (
    <div className="App">
      <NavBar />
     <Routes>
      <Route path='/' element={<Editorial /> }/>
      <Route path='/blogs' element={<Blogs />}/>
      <Route path="/desc" element={<Description />}/>
    </Routes>
       
      
    </div>
  );
}

export default App;
