
import './App.css';
import {

  BrowserRouter as Router,

  Route,

  Routes,
} from "react-router-dom";


import Home from './screens/Home';
import { Login } from './screens/Login';
import SignUp from './screens/SignUp';

function App() {
  return (
    <Router>
      <div >
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/createuser' element={<SignUp />} />

        </Routes>


      </div>
    </Router>
  );
}

export default App;
