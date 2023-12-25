import './App.css';
import Home from './screens/Home';
import '../node_modules/bootstrap-dark-5/dist/css/bootstrap-dark.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
//once the above 3 lines are imported all bootstraps effect done come into play 


import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom" ;
import Login from './screens/Login';


function App() {
  return (
    //can return a single div at the end of it all
    //font size fs is of bootstrap 
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/login" element={<Login/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
//components are reusable components 
//screens are the thing which consist of components and are displayed once 
