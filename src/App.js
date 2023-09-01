import './index.css';
import Header from './components/Header';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Giftsformen from './components/Giftsformen';
import Home from './components/Home';
import Sidebar from './components/Sidebar';
import Searchfilter from './components/Searchfilter';

function App() {
  return (
    <>
    <BrowserRouter>
      <Header />
    <div className='App flex'>
      <div className='fixed'>
       <Sidebar />
      </div>
       <Routes>
        <Route exact path="/" element={ <Home /> } />
        <Route  path="/men" element={ <Giftsformen /> } />
        <Route  path="/filter" element={ <Searchfilter /> } /> 
        </Routes>
    </div>
  </BrowserRouter>
  </>
  );
}

export default App;
