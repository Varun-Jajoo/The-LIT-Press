
import './App.css';
import Navbar from './comps/Navbar'
import News from './comps/News';
import { Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News key="general" pageSize='6' category='general'/>} />
          <Route exact path="/sports" element={<News key="sp" pageSize='6' category='sports' />} />
          <Route exact path="/health" element={<News key="health" pageSize='6' category='health' />} />
          <Route exact path="/entertainment" element={<News key="enter" pageSize='6' category='entertainment' />} />
          <Route exact path="/business" element={<News key="business" pageSize='6' category='business' />} />
          <Route exact path="/science" element={<News key="science" pageSize='6' category='science' />} />
          <Route exact path="/technology" element={<News key="tech" pageSize='6' category='technology' />} />
        </Routes>
      </Router>
    </div>
  );
}


export default App;
