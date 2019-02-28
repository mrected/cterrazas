import React from 'react';

const Work = () => (
            <section className="gridItem" id="work">
                <h1 className="sectionTitle">Web Work</h1>
                <div className="siteInfo">
                    <div>
                        <img className="siteImg" src="images/cascSite.png" alt="central avenue shirt company shown on a phone and laptop" />
                    </div>
                    <div>
                        <h3 className="siteTitle">CentralAveShirtCo.com</h3>
                        <ul className="languageIcons">
                        <li><img src="images/icons/HTML.svg" alt="HTML" /><br /><span className="languageIconDescription">HTML5</span></li>
                            <li><img src="images/icons/CSS.svg" alt="CSS" /><br /><span className="languageIconDescription">CSS3</span></li>
                            <li><img src="images/icons/JavaScript.svg" alt="JavaScript" /><br /><span className="languageIconDescription">JavaScript</span></li>
                            <li><img src="images/icons/Bootstrap.svg" alt="Bootstrap" /><br /><span className="languageIconDescription">bootstrap</span></li>
                            <li><img src="images/icons/jQuery.svg" alt="jQuery" /><br /><span className="languageIconDescription">jQuery</span></li>
                            <li><img src="images/icons/Photoshop.svg" alt="Photoshop" /><br /><span className="languageIconDescription">Photoshop</span></li>
                            <li><img src="images/icons/Illustrator.svg" alt="Illustrator" /><br /><span className="languageIconDescription">Illustrator</span></li>
                        </ul>
                    </div>
                    <p className="siteDescription">Central Ave. Shirt Company was supposed to be a locally based, apparel website that focused on custom printing and embroidery. 
												Sadly, the company itself never got off the ground so it sits quietly on my testing domain.</p><br />
					<p className="siteDescription">I added a lot of features like sharing info between pages, calculating costs on the fly, plugin apparel designer, 
												and some cool features with the banner on the home page. Plus I did all the  photography work for the banners so I just like it.<br /><br />
												<a href="http://centralaveshirt.202dev.com/" target="_blank">Check out Central Ave Shirt Co</a></p>
                </div>
            </section>
        );

export default Work;
