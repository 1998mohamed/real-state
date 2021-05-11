import React from 'react'
import Bproperty from './Bproperty';
import pimage1 from '../images/p1.png'
import pimage2 from '../images/p2.png'
import pimage3 from '../images/p3.png'
import pimage4 from '../images/p4.png'

function Properties() {
    return (
        <div className='product'>
            <div className='p-heading'>
                <h3>Properties</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ultrices tristique augue,</p>
            </div>

            <div className='product-container'>
                <Bproperty image={pimage1} name='Al-Musalla' price="$240.989" />
                <Bproperty image={pimage2} name='Al-Hafz' price="$540.989" />
               
            </div>
            
        </div>
    )
}

export default Properties;
