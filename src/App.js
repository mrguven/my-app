import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';


function App() {
  return (
    <div className="App">
     
<Navbar />
     <BrowserRouter>
     
     <Routes>

        <Route excat path='/' element={<Home />} />


     </Routes>
     
     </BrowserRouter>



    </div>
  );
}

export default App;
