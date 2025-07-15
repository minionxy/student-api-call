import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addstudent from './components/Addstudent';
import Searchstudent from './components/Searchstudent';
import Deletestudent from './components/Deletestudent';
import Viewstudent from './components/Viewstudent';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <Addstudent/> }/>
      <Route path='/Search' element={ <Searchstudent/> }/>
      <Route path='/Delete' element={ <Deletestudent/> }/>
      <Route path='/View' element={ <Viewstudent/> }/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
