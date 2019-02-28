import React from 'react'
 

    const Skill = props => (
      
      <li>
        <div className="skillIcon">
          <img src={require(`./../images/icons/${props.name}.svg`)} alt={props.name} />
				</div>
				<div class="skillLevelDiv">
          <div className="skillLevel" style={{ width: `${props.level}` }} >
            {props.name}
          </div>
				</div>
      </li>
    )

export default Skill

							
