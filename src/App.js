import logo from './logo.svg';
import './App.css';
import {About,Cards,Donation,Footer,Header,Login,Home,Nav,Profile,Signup} from "./components"
import {Routes,Route,Navigate,withRouter} from 'react-router-dom'


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div className="App">
      <Header/>
        <Routes>
          <Route path="/about" 
          element= {<About/>}>
          </Route>
          <Route path="/" 
          element= {<Home/>}>
          </Route>
          <Route path="/donation" element= {<Donation/>}>

          </Route>
            <Route path="/login" element= {<Login/>}>

          </Route>
            <Route path="/profile" element= {<Profile/>}>

          </Route>
            <Route path="/signup" element= {<Signup/>}>
          </Route>
        </Routes>
        <Footer/>

    </div>
  );
}

export default App;

