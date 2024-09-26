import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '/src/pages/Home';

import './App.css';
import BlogPage from './pages/BlogPage';


function App() {

  return (
    <>
      <Router>
         {/* You can add the header component here */}

         <Routes>
            {/* All the pages will be here */}
            <Route path="/" element={ <Home /> } />
            <Route path="/blog/:id" element={<BlogPage />} />
         </Routes>
      </Router>
    </>
  )
}

export default App
