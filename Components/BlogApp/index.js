import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from '../Header';
import Home from '../Home';
import About from '../About';
import Contact from '../Contact';
import BlogList from '../BlogList';

import './index.css';

function BlogApp() {
  return (
    <div className="app-container">
      <div className="responsive-container">
        <Router>
      <Header/>
        <div className="app-body">
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/contact' element={<Contact />} />
          </Routes>
        </div>
        </Router>
        <BlogList/>
      </div>
    </div>
  );
}

export default BlogApp;
