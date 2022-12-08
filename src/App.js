import logo from './logo.svg';
import './App.css';
import {About,Cards,Donation,Footer,Header,Login,Main,Nav,Profile,Signup} from "./components"
import {Routes,Route,Navigate,withRouter} from 'react-router-dom'



function App() {
  return (
    <React.Fragment>
        <Header/>
        <Routes>
        <Route path="/about" element= {<About/>}/>
        <Route path="/" element= {<Main/>}/>
        <Route path="/donation" element= {<Donation/>}/>
        <Route path="/login" element= {<Login/>}/>
        <Route path="/profile" element= {<Profile/>}/>
        <Route path="/signup" element= {<Signup/>}/>
        </Routes>
        <Footer/>

    </React.Fragment>
  );
}

export default App;
