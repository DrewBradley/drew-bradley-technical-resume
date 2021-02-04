import React from "react"
import './App.css';
import Header from "./Header/Header"
import History from "./History/History"
import ProjectContainer from "./Projects/ProjectContainer"
import Skills from "./Skills/Skills"

const App = () => {
  return (
    <div className="App">
      <Header />
      <Skills />
      <History />
      <ProjectContainer />
    </div>
  )
}

export default App;
