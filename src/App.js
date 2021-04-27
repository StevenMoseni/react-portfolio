import React, {useState} from 'react';
import './App.css';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Nav from './components/Nav';
function App() {
  const [pages, setPages] = useState ([
    <About/>,
    <Contact/>,
    <Portfolio/>,
  ])
  const [currentPage, setCurrentPage] = useState (pages[0])
  return (
  <div>
    <Nav pages={pages} setCurrentPage={setCurrentPage} />
{currentPage}
  </div>
  );
}

export default App;
