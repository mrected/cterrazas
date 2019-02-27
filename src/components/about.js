import React, { Component } from 'react'

class About extends Component {
  render() {
    return (
      <section className="gridItem" id="about">
        <h1 className="sectionTitle">About</h1>
        <img
          id="me"
          src="https://res.cloudinary.com/christerrazas-info/image/upload/v1521319466/christerrazas2.jpg" alt="chris terrazas"
        />
        <div id="aboutText">
          <p>
            <span className="big-text">Hello. I’m Chris Terrazas.</span>
            <br /> I’m born and raised in St Petersburg, FL. I build websites,
            solve problems with code and love being outdoors.
          </p>

          <p>
            See below to check out some my work. I'm also a skilled photographer
            and have a long history in graphics and design work, which I hope is 
            obvious.
          </p>

          <p>
            I’m currently looking for work, so if you’re looking for a developer
            and you like what you see, contact me and I’d love to meet with you.
          </p>
        </div>
      </section>
    )
  }
}

export default About
