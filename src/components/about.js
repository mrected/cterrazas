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
            <br /> I’m born and raised in St Petersburg, FL. I ride bikes
            ridiculously long distances and I design and develop web pages in my
            humble apartment.
          </p>

          <p>
            I’ve been at this about 4ish years now. See below to check out some
            development related things I’m good at. I’m also know a lot about
            how to work a camera and I’m pretty good in the graphics area as
            well.
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
