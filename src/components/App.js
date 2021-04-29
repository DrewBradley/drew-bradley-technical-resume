import React from "react"
import './App.css';
import Header from "./Header/Header"
import History from "./History/History"
import ProjectContainer from "./Projects/ProjectContainer"
import Skills from "./Skills/Skills"
import Main from "./Main/Main"
import Contact from "./Header/Contact"
import { Route } from 'react-router-dom';

const App = () => {
  return (
    <div className="App">

      <Header />
      {/* <ProjectContainer /> */}
      <Route exact path="/drew-bradley-technical-resume" exact component={Main} />
      <Route path="/projects" exact component={ProjectContainer} />
      {/* <Route path="/" exact component={ App } /> */}
      <Route path="/skills" exact component={Skills} />
      <Route path="/history" exact component={History} />
      <Route path="/contact" exact component={Contact} />
    </div>
  )
}

export default App;
