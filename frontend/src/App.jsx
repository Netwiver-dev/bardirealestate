import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '/src/pages/Home';

import './App.css';


function App() {

  return (
    <>
      <Router>
         {/* You can add the header component here */}

         <Routes>
            {/* All the pages will be here */}
            <Route path="/" element={ <Home /> } />
         </Routes>
      </Router>
    </>
  )
}

export default App
