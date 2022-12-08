import React from 'react';
import Main from './components/Main';
import{BrowserRouter} from 'react-router-dom'


// In our main App component, we are rendering only single instances of Header and Navbar and several instances of Card
function App() {
  return (
    <div>
      <BrowserRouter>
      <Main/>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

