import React, { Component } from 'react'
import Skill from './skill'

class SkillBlock extends Component {
  render() {
    return (
      <div id="skillBlock">
        <h2 class="sectionSubHeading">Skills</h2>
        <ul>
          <Skill name="HTML" level="65%" />
          <Skill name="CSS" level="55%" />
          <Skill name="JavaScript" level="65%" />
          <Skill name="React" level="45%" />
          <Skill name="jQuery" level="55%" />
          <Skill name="PHP" level="20%" />
          <Skill name="Sass" level="60%" />
          <Skill name="Photoshop" level="85%" />
          <Skill name="Illustrator" level="95%" />
          <Skill name="InDesign" level="45%" />
          <Skill name="Bootstrap" level="35%" />
          <Skill name="Photography" level="85%" />
        </ul>
      </div>
    )
  }
}

export default SkillBlock
