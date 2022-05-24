import React from 'react'
import AboutImage from '../images/about.png'

function About() {
    return (
        <div id='about'>
            <div className="about-text">
                <h1>UPCOMING EVENTS</h1>
                <p>We're always having exciting events all year-round. From parties to giveaways there is always something fun going on! See what's latest and upcoming by clicking on the button below. </p>
                <button>Learn More</button>
            </div>
            <div className="about-image">
                <img src={AboutImage} alt="about_image" />
            </div>
        </div>
    )
}

export default About
