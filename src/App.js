import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import './App.css';
import Firstpage from './Components/Firstpage/Firstpage';
import Secondpage from './Components/Secondpage/Secondpage';
import Thirdpage from './Components/Thirdpage/Thirdpage';
import Loginpage from "./Components/Loginpage/Loginpage";

function App() {
  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/first">Home</Link>
          </li>
          <li>
            <Link to="/second">Secondpage</Link>
          </li>
          <li>
            <Link to="/third">Thirdpage</Link>
          </li>
          <li>
            <Link to="/login">SingIn</Link>
          </li>
          
        </ul>
        <Routes>
          <Route exact path='/first' element={<Firstpage/>}></Route>
          <Route exact path='/second' element={<Secondpage/>}></Route>
          <Route exact path='/third' element={<Thirdpage/>}></Route>
          <Route exact path='/login' element={<Loginpage/>}></Route>
          
         
        </Routes>
      </div></Router>

  );
}

export default App;
