import React, { Component } from 'react'

class Skill extends Component {
  render() {
    const setSkillLevel = () => {
      document.getElementsByTagName('.skillLevel').forEach(skill => {
        let width = skill.dataset.width
        console.log(width)
      })
    }

    // setSkillLevel()

    //     function(){
    //     this.css('width',$(this).attr('data-width'));
    //   });
    // }

    // const setSkillLevel = () => {
    //   $(".skillLevel").each(function(){
    //     $(this).css('width',$(this).attr('data-width'));
    //   });
    // }

    return (
      <li>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width={this.props.level}>
            {this.props.name}
          </div>
        </div>
      </li>
    )
  }
}

export default Skill
