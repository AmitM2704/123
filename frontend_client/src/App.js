//import logo from './logo.svg';
import './App.css';
import Header from './components/header';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import Login from './components/login';
import Home from "./components/home";
import Register from './components/register';
import {Link} from "react-router-dom";
import Our_services from './components/our_services';
//import {useHistory} from "react-router";


function App() {
  
  // const history = useHistory();

  // function delay(e,path) 
  // {
  //   e.preventDefault();
  //   setTimeout(() => history.push(path) , 300);

    
  // }

  return (
    <div className="App">
        
        <BrowserRouter><Routes>
              <Route path='/' element ={<Home/>}></Route>
              {/* <Route path='/login' element ={<Header/>}></Route> */}
              <Route path='/home' element={<Home/>}></Route>
              <Route path='/login' element={<Login/>}></Route>
              <Route path='/register' element={<Register/>}></Route>
              <Route path='/services' element = {<Our_services/>}></Route>
              
          </Routes></BrowserRouter>
        

    </div>


  );
}

export default App;
