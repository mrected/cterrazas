import React, { Component } from 'react'
import './index.scss'

class App extends Component {
  render() {
    return (
    <>
  
<div id="wrapper-head">

<div id="navBrand">
  <div class="navBrandPanelSticky unstuck">
    
  </div>
  <div class="navBrandPanel">
    <div class="brandDiv unstuck">
      <img src="images/brand-darkBg.svg" alt="Chris Terrazas, designer, developer logo" class="brand" />
    </div><!-- brandDiv -->
    <div class="navToggle">
      <span></span>
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="nav unstuck">
      <ul>
        <li class="navLink"><a href="#about">About</a></li>
        <li class="navLink"><a href="#work">Work</a></li>
        <li class="navLink"><a href="#footer">Contact</a></li>
      </ul>
    </nav>
  </div>

</div>
</div>

<div id="wrapper-body">

<section class="gridItem" id="about">
  <h1 class="sectionTitle">About</h1>
  <img id="me" src="https://res.cloudinary.com/christerrazas-info/image/upload/v1521319466/christerrazas2.jpg">
  <div id="aboutText">
    <p><span class="big-text">Hello. I’m Chris Terrazas.</span><br> I’m born and raised in St Petersburg, FL. I ride bikes ridiculously long distances and I design and develop web pages in my humble apartment.</p>

    <p>I’ve been at this about 4ish years now. See below to check out some development related things I’m good at. I’m also know a lot about how to work a camera and I’m pretty good in the graphics area as well.</p>

    <p>I’m currently looking for work, so if you’re looking for a developer and you like what you see, contact me and I’d love to meet with you.</p>

  </div>


  <h2 class="sectionSubHeading">Skills</h2>
  <div id="skillBlock">
    <ul>
      <li>
        <div class="skillIcon">
          <i class="fab fa-html5" aria-label="html5"></i>
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="65%">HTML5</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <i class="fab fa-css3" aria-label="css"></i>
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="55%">CSS3</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <i class="fab fa-js-square" aria-label="javascript"></i>
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="35%">Javascript</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/jqueryIcon-lt.png" alt="jquery">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="55%">jQuery</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/phpIcon-lt.png" alt="php">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="20%">PHP</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/sassIcon-lt.png" alt="sass">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="60%">Sass</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/photoshopIcon-lt.png" alt="photoshop">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="85%">Photoshop</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/illustratorIcon-lt.png" alt="illustrator">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="95%">Illustrator</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/indesignIcon-lt.png" alt="indesign">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="45%">InDesign</div>
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <img src="images/bootstrapIcon-lt.png" alt="bootstrap">
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="35%">Bootstrap</div>							
        </div>
      </li>
      <li>
        <div class="skillIcon">
          <i class="fas fa-camera" aria-label="photography"></i>
        </div>
        <div class="skillLevelDiv">
          <div class="skillLevel" data-width="85%">Photography</div>
        </div>
      </li>
    </ul>
  </div>
</section>



<section class="gridItem" id="work">
  <h1 class="sectionTitle">Web Work</h1>
  <h3 class="siteTitle">CentralAveShirtCo.com</h3>
  <div class="siteInfo">
    <div>
      <img class="siteImg" src="images/cascSite.png" alt="central avenue shirt company shown on a phone and laptop">
    </div>
    <div>
      <ul class="languageIcons">
        <li><i class="fab fa-html5" aria-label="html5"></i><br><span class="languageIconDescription">HTML5</span></li>
        <li><i class="fab fa-css3-alt" aria-label="css"></i><br><span class="languageIconDescription">CSS3</span></li>
        <li><i class="fab fa-js-square" aria-label="javascript"></i><br><span class="languageIconDescription">JavaScript</span></li>
        <li><img src="images/bootstrapIcon.png" alt="bootstrap"><br><span class="languageIconDescription">bootstrap</span></li>
        <li><img src="images/jqueryIcon.png" alt="jquery"><br><span class="languageIconDescription">jQuery</span></li>
        <li><img src="images/photoshopIcon.png" alt="photoshop"><br><span class="languageIconDescription">Photoshop</span></li>
        <li><img src="images/illustratorIcon.png" alt="illustrator"><br><span class="languageIconDescription">Illustrator</span></li>
      </ul>
      <p class="siteDescription">Central Ave. Shirt Company was supposed to be a locally based, apparel website that focused on custom printing and embroidery. Sadly, the company itself never got off the ground so it sits quietly on my testing domain.</p><br>
      <p class="siteDescription">I added a lot of features like sharing info between pages, calculating costs on the fly, plugin apparel designer, and some cool features with the banner on the home page. Plus I did all the  photography work for the banners so I just like it.<br><a href="http://centralaveshirt.202dev.com/" target="_blank">Check out Central Ave Shirt Co</a></p>
    </div>
  </div>
  <h3 class="siteTitle">AutoPlate.net</h3>
  <div class="siteInfo">
    <div>
      <img class="siteImg" src="images/autoplateSite.png" alt="autoplate.net shown on a phone and laptop">
    </div>
    <div>
      <ul class="languageIcons">
        <li><i class="fab fa-html5" aria-label="html5"></i><br><span class="languageIconDescription">HTML5</span></li>
        <li><i class="fab fa-css3-alt" aria-label="css"></i><br><span class="languageIconDescription">CSS3</span></li>
        <li><i class="fab fa-js-square" aria-label="javascript"></i><br><span class="languageIconDescription">JavaScript</span></li>
        <li><img src="images/bootstrapIcon.png" alt="bootstrap"><br><span class="languageIconDescription">bootstrap</span></li>
        <li><img src="images/jqueryIcon.png" alt="jquery"><br><span class="languageIconDescription">jQuery</span></li>
        <li><img src="images/photoshopIcon.png" alt="photoshop"><br><span class="languageIconDescription">Photoshop</span></li>
        <li><img src="images/illustratorIcon.png" alt="illustrator"><br><span class="languageIconDescription">Illustrator</span></li>
        <li><i class="fas fa-camera" aria-label="photography"></i><br><span class="languageIconDescription">Photography</span></li>
      </ul>
      <p class="siteDescription">AutoPlate is a promotional product distributor that specializes in automotive accessories thru organizations like ASI, Sage and UPIC. The site is mainly information only, all contact is handled thru the membership organization. It’s focus is to provide base pricing, product information and art templates to consumers and suppliers.<br><a href="http://www.autoplate.net" target="_blank">Check out AutoPlate</a></p>
    </div>
  </div>
</section>




</div>
<div id="wrapper-footer">

<footer class="gridItem" id="footer">
  <h1 class="sectionTitle">Interested?</h1>
  <p>How to get a hold of me:</p>
  <div id="contactListDiv">
    <ul id="contactList">
      <li><a href="tel:1-727-265-1380" aria-label="phone link" aria-hidden="true"><i class="fas fa-phone-square"></i></a></li>
      <li><a href="sms:1-727-265-1380" aria-label="text link" aria-hidden="true"><i class="fas fa-comment-alt"></i></a></li>
      <li><a href="mailto:chris.terrazas@gmail.com"  aria-label="email link"><i class="fas fa-envelope" aria-hidden="true"></i><br></a></li>
    </ul>
  </div>
  <p>I spend some time at these other places as well:</p>
  <div id="contactListDiv">
    
    <ul id="contactList">
      <li><a href="https://www.behance.net/christerra8f7e" target="_blank" aria-label="behance portfolio"><i class="fab fa-behance" aria-hidden="true"></i><br></a></li>
      <li><a href="https://github.com/mrected" target="_blank"  aria-label="github profile"><i class="fab fa-github" aria-hidden="true"></i><br></a></li>
      <li><a href="https://codepen.io/mrected/" target="_blank"  aria-label="codepen profile"><i class="fab fa-codepen" aria-hidden="true"></i><br></a></li>
      <li><a href="https://www.linkedin.com/in/chris-terrazas-89106b24/" target="_blank"  aria-label="linkedin profile"><i class="fab fa-linkedin-in" aria-hidden="true"></i><br></a></li>
    </ul>
  </div>
  <p>Whether it's a single freelance job or you want me to be a part of your team. Drop me a line. Let's do this.</p>
</footer>

</div>

    </>
    )
  }
}

export default App
