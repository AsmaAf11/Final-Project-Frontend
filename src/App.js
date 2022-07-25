import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap"
import Cards from './components/Categories/Cards';


function App() {
  return (
    <div className="App">

<Container>
        <Router>
          <Routes>
            <Route>
              <Route path='/categories' element={<Cards/>}></Route>
            </Route>
          </Routes>
        </Router>
        </Container>
      
    </div>
  );
}

export default App;
