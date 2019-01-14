import React, { Component } from 'react'

class Skill extends Component {

  componentDidMount() {
    const element = document.querySelector(".skillLevel")
    element.style.width = element.dataset.width
  }

  render() {
 
    return (
      <li>
        <div className="skillLevelDiv">
          <div className="skillLevel" data-width={this.props.level}>
            {this.props.name}
          </div>
        </div>
      </li>
    )
  }
}

export default Skill
