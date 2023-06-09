import React from 'react';
import './Section3.css'
const Section3 = () => {
    return (
        <div className='sec-3' id='id1'>
            <div className='text'>
                <h1>Only You are your competitor!</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo incidunt quasi veniam similique repellat ea commodi, sunt, reiciendis error quos laudantium porro saepe alias. Assumenda veritatis commodi nisi inventore alias!</p>
            </div>
            <div className='icons2'>
                <div className='icons-grid'>
                    <div className='icons-pos'><img src="s1.svg" alt="" /></div>
                    <div className='icons-pos1'><img src="s2.svg" alt="" /></div>
                    <div className='icons-pos2'><img src="s3.svg" alt="" /></div>
                    <div className='icons-pos3'><img src="s4.svg" alt="" /></div>
                    <div className='icons-pos4'><img src="s5.svg" alt="" /></div>
                </div>
            </div>
        </div>
    );
};

export default Section3;