import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// Compoennts
import NavBar from './components/NavBar';
// Pages
import Home from './pages/home';
import Login from './pages/login';
import Signup from './pages/signup';


function App(){  
    return (
      <div className='App'>
        <Router>
        <NavBar/>          
          <div class="container">          
            <Routes>
              <Route exact path="/" element={<Home/>}/>
              <Route exact path='/login' element={<Login/>}/>
              <Route exact path='/signup' element={<Signup/>}/>
            </Routes>             
          </div>
        </Router>
      </div>
    )    
}
export default App;
