import React, { useState } from 'react'
import Settings from './components/Settings/Settings'
import Profiles from './components/Profiles/Profiles'

function App() {
  const [page, setPage] = useState("Settings")

  const pageHandler = (page) => {
    if(page === "Settings") {
      setPage("Settings")
    } else {
      setPage("Profiles")
    }
  }

  return (
    <div className="App">
      <header>
        <img className="logo" src="v1.png" alt="logo"/>
        <div className="header-bar">
          <div className={page === "Settings" ? "header-page-active" : "header-page-inactive"} onClick={() => pageHandler("Settings")}>Settings</div>
          <div className={page === "Profiles" ? "header-page-active" : "header-page-inactive"} onClick={() => pageHandler("Profiles")}>Profiles</div>
        </div>
      </header>
      <div className="settings">
        {
          page === "Settings" ? 
          < Settings />
          :
          <Profiles />
        }
      </div>
    </div>
  );
}

export default App;
