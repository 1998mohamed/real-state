import React from 'react';
import Navbar from './Navbar';

function Header() {
    return (
        <div className="header">
            <Navbar />
            <div className='intro'>
                <p>Looking for a Property !</p>
                <h1><span>Buy </span>and<span> Sell</span> Properties</h1>
                <p className='details'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tristique augue, eu varius ligula pretium in. Vivamus mollis quis orci eget aliquam. 
                Phasellus lacinia eu mauris quis fringilla. Quisque at ornare sapien. Ut dignissim, dui ut vestibulum rutrum, tortor nisl ornare libero.</p>
                 <a href='#' className='header-btn'>Details</a>
            </div>
        </div>
    )
}

export default Header;
