import React, { Component } from 'react'
import About from './components/About'

import Header from './components/Header'

import './index.scss'
import SkillBlock from './components/SkillBlock'
import WorkBlock from './components/WorkBlock';

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <SkillBlock />
        <WorkBlock />
      </>
    )
  }
}

export default App
