import React, { useRef } from 'react';
import './App.css';
import Footer from './components/Footer';
// import './TextConverter.css';
import Navbar from './components/Navbar';
// import TextConverter from './components/TextConvertor';
import TextForm from './components/TextForm';
import Home from './components/Home';
// router ne import 
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import About from './components/About';
import Contactus from './components/Contactus';
import Alerts from './components/Alerts';
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    }
    );
     setTimeout(() => {
      setAlert(null);
    }, 1500);
  }
  const [mode,setMode]=useState('light'); // tell whether mode is light or dark
  const toggelmode=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor="#325fa3";
      document.body.style.color="white";
      showAlert("dark Mode Is Enabled!","info");
    }
    else{
      setMode('light');
      document.body.style.backgroundColor="white";
      document.body.style.color="#343a40"
      showAlert("Light Mode Is Enabled!","info");
    }
  }
  return (
    <>
    <Navbar title="ShravHub" home="Home" mode={mode} toggelmode={toggelmode} label={`${mode==='light'?'dark':'light'}Mode`} />
    <Alerts alert={alert} />
    <Routes>
      <Route path='home' element={<Home />} mode={mode} />
      <Route path='/' element={<TextForm showAlert={showAlert} />} mode={mode} />
      <Route path="textform" element={<TextForm  showAlert={showAlert} />} mode={mode} />
      <Route exact path="/about" element={<About /> } mode={mode} />
      <Route exact path="/contactus" element={<Contactus />} />
    </Routes>
    {/* <TextForm /> */}
    <Footer mode={mode}/>
    {/* <TextConverter /> */}
    </>
  );
}

export default App;
