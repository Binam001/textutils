import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import AlertInfo from "./components/AlertInfo";
import AboutUs from "./components/AboutUs";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  // const [theme, setTheme] = useState('light');
  // const toggleTheme = ()=>{
  //   if(theme === 'light'){
  //     setTheme('dark');
  //     document.body.style.backgroundColor = '#2a2d30';
  //     document.body.style.color = 'white';
  //     showAlert("Dark Mode Enabled","success")
  //   }
  //   else{
  //     setTheme('light');
  //     document.body.style.backgroundColor = 'white';
  //     document.body.style.color = 'black';
  //     showAlert("Dark Mode Enabled","success")
  //   }
  // }
  const removeBodyClasses = ()=>{
    document.body.classList.remove('bg-light')
    document.body.classList.remove('bg-dark')
    document.body.classList.remove('bg-danger')
    document.body.classList.remove('bg-success')
    document.body.classList.remove('bg-warning')
    document.body.classList.remove('bg-primary')
  }
  const toggleTheme = (cls)=>{
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    if(cls === 'primary'){
      // setTheme('dark');
      // document.body.style.backgroundColor = '#2a2d30';
      // document.body.style.color = 'green';
      // showAlert("Dark Mode Enabled","success")
    }
    if(cls === 'dark'){
      document.body.style.color = 'white';
    }
  }
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    }, 1500);
  }
  return (
    <>
    <Router>
      <Navbar title="TextUtils" toggleTheme={toggleTheme}/>
      {/* <Navbar title="TextUtils" theme={theme} toggleTheme={toggleTheme}/> */}
      <AlertInfo alert={alert}/>
      <div className="container mt-3">
          <Routes>
            <Route exact path="/AboutUs" element={<AboutUs />} />
            <Route exact path="/" element={<TextForm showAlert={showAlert}/>} />
            {/* <Route exact path="/" element={<TextForm theme={theme} showAlert={showAlert}/>} /> */}
          </Routes>
      </div>
    </Router>
  </>
  );
}

export default App;
