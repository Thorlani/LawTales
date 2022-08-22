import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Field from './Field';
import Ask from './Ask';
import Answer from './Answer';
import About from './About';
import Profile from './Profile';


function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/field' element={<Field />} />
        <Route path='/ask' element={<Ask />} />
        <Route path='/answer' element={<Answer />} />
        <Route path='/about' element={<About />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
