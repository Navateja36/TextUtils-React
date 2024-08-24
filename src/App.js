import React, { useState } from 'react';
import './App.css';
import Mode from './components/Mode';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import Colors from './components/Colors';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link,
} from "react-router-dom";


function App() { 
  const [mode ,setMode]=useState('light');//whether dark mode is enabled or not
  const [alert,setAlert]= useState(null);

  const showAlert=(message,type)=>{
      setAlert({
        msg:message,
        type:type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }

  const togglemode=()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#134373';
      showAlert("Dark mode has been enabled","success")
      document.title="Textutils - Dark Mode"
    }
    else{
      setMode( 'light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success")
      document.title="Textutils"
    }
  }
  return (
    <>
      {/* <NavBar title="set your title" about="set your about"/> */}
      <Router>
              <NavBar title="TextUtils" about="About" home="Home" mode={mode} togglemode={togglemode}/>
              <Alert alert={alert}/>
              {/* <Colors/> */}  {/*u can uncomment to see this and also uncomment in import section -- for more background colors*/}
              <div className="container my-5">  
              <Routes>
                  <Route  exact path="/" element={<TextForm showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>}>
                  </Route>
                  <Route  path="/Mode" element={<Mode/>}>
                  </Route>
              </Routes>
              </div>
      </Router>
      
    </>
  );
}

export default App;
