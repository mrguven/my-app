
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import FetchFile from './pages/FetchFile';
// import styled from "styled-components";
import Demo from './pages/Demo';

function App() {
  return (
    <div className="App">
     

     <BrowserRouter>
     <Navbar />
     <Routes>

        <Route  path='/' exact  element={<Home />} />
    <Route path='/todolist' element={<ToDoList />} />  
<Route path='/fetch' element={<FetchFile />} />
    <Route path='/demo' element={<Demo />} />
</Routes>
     </BrowserRouter>



    </div>
  );
}

export default App;
