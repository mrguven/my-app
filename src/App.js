
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ToDoList from './pages/ToDoList';
import FetchFile from './pages/FetchFile';
// import styled from "styled-components";

function App() {
  return (
    <div className="App">
     

     <BrowserRouter>
     <Navbar />
     <Routes>

        <Route  path='/' exact  element={<Home />} />
    <Route path='/todolist' element={<ToDoList />} />  
<Route path='/fetch' element={<FetchFile />} />
    
</Routes>
     </BrowserRouter>



    </div>
  );
}

export default App;
