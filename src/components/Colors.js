import React from 'react';
import PropTypes from 'prop-types'


export default function Colors(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">{props.title}</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">{props.home}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">{props.about}</a>
              </li>
            </ul>
            {/* <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form> */}
            {/* <div className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
                <input className="form-check-input" onClick={props.togglemode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div> */}


          <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false">
                  Change Theme
                </button>
                <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                  <li>
                    <button  onClick={() => props.togglemode('dark')}>
                      Enable Dark Mode
                    </button>
                  </li>
                  <li>
                    <button  onClick={() => props.togglemode('#f43a09')}>
                      Enable Blue Mode
                    </button>
                  </li>
                  <li>
                    <button onClick={() => props.togglemode('pink')}>
                      Enable Pink Mode
                    </button>
                  </li>
                  <li>
                    <button  onClick={() => props.togglemode('red')}>
                      Enable Red Mode
                    </button>
                  </li>
                </ul>
              </div>



          </div>
        </div>
      </nav>
  );
}


// NavBar.defaultProps={
//     title:"TextUtils"
// };

// or

Colors.propTypes={title:PropTypes.string.isRequired, about: PropTypes.string.isRequired}




// const toggleMode = (newMode) => {
//   if (newMode === 'dark') {
//     setMode('dark');
//     document.body.style.backgroundColor = '#134373'; // Dark mode background
//     showAlert("Dark mode has been enabled", "success");
//   } else if (newMode === 'light') {
//     setMode('light');
//     document.body.style.backgroundColor = 'white'; // Light mode background
//     showAlert("Light mode has been enabled", "success");
//   } else {
//     setMode(newMode);
//     document.body.style.backgroundColor = newMode; // Custom mode background
//     showAlert(`${newMode.charAt(0).toUpperCase() + newMode.slice(1)} mode has been enabled`, "success");
//   }
// };

// ----------------> this is the togglemode function should be replaced with actuala togglemode funciton for more background-color modes in website.