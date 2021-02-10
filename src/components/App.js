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
      <Route exact path="/" exact component={ProjectContainer} />
      {/* <Route path="/" exact component={ App } /> */}
      <Route path="/skills" exact component={Skills} />
      <Route path="/history" exact component={History} />
    </div>
  )
}

export default App;
