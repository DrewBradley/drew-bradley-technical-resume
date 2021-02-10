import React from "react"
import './App.css';
import Header from "./Header/Header"
import History from "./History/History"
import ProjectContainer from "./Projects/ProjectContainer"
import Skills from "./Skills/Skills"
import { Route, Link } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">

      <Header />
      <Route path="drew-bradley-technical-resume/" exact component={ProjectContainer} />
      {/* <Route path="/" exact component={ App } /> */}
      <Route path="drew-bradley-technical-resume/skills" exact component={Skills} />
      <Route path="drew-bradley-technical-resume/history" exact component={History} />
    </div>
  )
}

export default App;
