
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './Components/Shop'
import Contact from './Components/Contact'
import Authors from './Components/Authors'
import Main from "./Components/Main";
import Layout from "./Components/Layout";
import Read from './Components/Read';
import Footer from './Components/Footer';
import Menu from './Components/Menu';

function App() {
  return (
    <>
      <BrowserRouter>
        <Layout />
        <Menu />
        <Routes>
            <Route exact path='/' element={<Main />}/>
            <Route  path='/shop' element={<Shop />}/>
            <Route  path='/contact' element={<Contact />}/>
            <Route  path='/author' element={<Authors />}/>
            <Route exact path='/read' element={<Read />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
