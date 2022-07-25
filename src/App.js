import "./App.css";

import Header from "./components/Home/Header";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Cards from "./components/Categories/Cards";
import Login from "./components/registration/Login";
import Signup from "./components/registration/Signup";
import AddArticle from "./components/Article/AddArticle";
import Home from "./components/Home/Home";

function App() {
  return (
    <div className="App">
      <Container>
        <Router>
          <Routes>
            <Route>
              <Route path="/categories" element={<Cards />}></Route>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/signup" element={<Signup />}></Route>
              <Route path="/AddArticle" element={<AddArticle />}></Route>
              <Route path="/Home" element={<Home />}></Route>
            </Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
