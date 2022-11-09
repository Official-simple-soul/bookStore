
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Shop from './Components/Shop'
import Contact from './Components/Contact'
import Authors from './Components/Authors'
import Main from "./Components/Main";
import Layout from "./Components/Layout";
import Cards from './Components/Cards';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="shop" element={<Shop />} />
            <Route path="author" element={<Authors />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path='/' element={<Main />} />
        </Routes>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
