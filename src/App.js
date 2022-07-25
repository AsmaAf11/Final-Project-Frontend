import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap"
import Cards from './components/Categories/Cards';
import Login from './components/registration/Login';
import Signup from './components/registration/Signup';


function App() {
  return (
    <div className="App">

<Container>
        <Router>
          <Routes>
            <Route>
              <Route path='/categories' element={<Cards/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/signup' element={<Signup/>}></Route>
            </Route>
          </Routes>
        </Router>
        </Container>
      

    </div>
  );
}

export default App;
