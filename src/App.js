import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Firstpage from './Components/Firstpage/Firstpage';
import Secondpage from './Components/Secondpage/Secondpage';
import Thirdpage from './Components/Thirdpage/Thirdpage';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="list">
          <ul>
            <li>
              <Link to="/first" className="link">Home</Link>
            </li>
            <li>
              <Link to="/second" className="link">Shopping</Link>
            </li>
            <li>
              <Link to="/third" className="link">About</Link>
            </li>
            
          </ul>
        </div>
        <Routes>
          <Route exact path='/first' element={<Firstpage />}></Route>
          <Route exact path='/second' element={<Secondpage />}></Route>
          <Route exact path='/third' element={<Thirdpage />}></Route>
          
        </Routes>
      </div></Router>

  );
}

export default App;
