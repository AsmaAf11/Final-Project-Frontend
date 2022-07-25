import './App.css';
import Header from './components/Home/Header';
import Footer from './components/Home/Footer';
import Home from './components/Home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Container} from "react-bootstrap"
import Cards from './components/Categories/Cards';
import Login from './components/registration/Login';
import Signup from './components/registration/Signup';
import ArticleByCategory from './components/Categories/ArticleByCategory';


function App() {
  return (
    <div className="App">

<Container>
        <Router>
        {/* <Header/> */}
          <Routes>
            <Route>
            <Route path='/Header' element={<Header/>}></Route>
            <Route path='/Footer' element={<Footer/>}></Route>

            <Route path='/' element={<Home/>}></Route>

              <Route path='/Cards' element={<Cards/>}></Route>
              <Route path='/articlesCategories' element={<ArticleByCategory/>}></Route>

              <Route path='/categories' element={<Cards/>}></Route>
              {/* <Route exact path='/articlesCategories' element={<ArticleByCategory/>}></Route>   */}
              <Route path='/articlesCategories/:id' element={<ArticleByCategory/>}></Route>

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
