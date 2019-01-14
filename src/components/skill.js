import React, { Component } from 'react'

class Skill extends Component {

  render() {
 
    const style = {
      "width": this.props.level
    }

    return (
      <li>
        <div className="skillLevelDiv">
          <div className="skillLevel" style={style}>
            {this.props.name}
          </div>
        </div>
      </li>
    )
  }
}

export default Skill
