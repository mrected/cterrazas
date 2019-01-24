import React, { Component } from 'react'

class Skill extends Component {

  render() {
 
    const style = {
      "width": this.props.level
    }

    return (
      <li>
        <div className="skillIcon">
          <img src={`../images/icons/${this.props.name}.svg`} alt={this.props.name} />
				</div>
				<div class="skillLevelDiv">
          <div className="skillLevel" style={style}>
            {this.props.name}
          </div>
				</div>
      </li>
    )
  }
}

export default Skill

							
