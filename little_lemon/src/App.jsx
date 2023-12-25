import React from 'react'
import './sass/App.css'
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Navbar from './components/Navbar';
import MenuCard from './components/MenuCard';
import Hero from './components/Hero';
import OnlineO from './components/OnlineO';
import TableB from './components/TableB';
import AboutUs from './components/AboutUs';
import Login_form from './components/Login_form';
import Footet from './components/Footet';



function App() {


 

  return (
    <>
    <div className='Maindiv' >  
    
    <Router>
    <Navbar />
      <Routes>
      <Route path='/'
         element={<Hero />} 
        ></Route>
        <Route path='/OnlineO'
         element={<OnlineO />} 
        ></Route>
        <Route path='/MenuCard'
         element={<MenuCard />} 
        ></Route>
         <Route path='/OnlineO'
         element={<OnlineO />} 
        ></Route>
         <Route path='/TableB'
         element={<TableB />} 
        ></Route>
         <Route path='/AboutUs'
         element={<AboutUs />} 
        ></Route>
        <Route path='/Login_form'
         element={<Login_form />} 
        ></Route>
      </Routes>
    </Router>
    </div>
    <Footet/>
    </>
  )
}

export default App;
