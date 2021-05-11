import React from 'react'
import aboutimage from '../images/about.png';

function About() {
    return (
        <div className='about'>
            <div className='about-model'>
                <img src={aboutimage} alt='about-image' />
            </div>
            <div className='about-text'>
                <h2>We Are The Best <br/> Real Estate Company </h2>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tristique augue, eu varius ligula pretium in. Vivamus mollis quis orci eget aliquam.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tristique augue, eu varius ligula pretium in. Vivamus mollis quis orci eget aliquam.
                </p>
                <button>View More Details</button>
            </div>
        </div>
    )
}

export default About;
