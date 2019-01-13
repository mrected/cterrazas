import React, { Component } from 'react'
import About from './components/about'

import Header from './components/header'
import './index.scss'
import SkillBlock from './components/skillBlock'

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <About />
        <SkillBlock />
      </>
    )
  }
}

export default App
