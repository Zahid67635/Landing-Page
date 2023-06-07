import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className='items-container'>
            <div className='sub'>
                <img src="https://media.istockphoto.com/id/1236947979/vector/man-working-at-home-or-office-employees-working-over-a-video-conference-man-chatting-with.jpg?s=612x612&w=0&k=20&c=6dClzlgoqjAnsLnywhe3mDGgrfpAKSYjMQUamuY4iMs=" alt="" />

                <button className='plan-btn'>See Plan</button>
            </div>
            <div className=''>
                <div className='sub'>
                    <img src="https://img.freepik.com/premium-vector/vector-cartoon-illustation-man-working-laptop-computer-table_253349-583.jpg?w=2000" alt="" />

                    <button className='plan-btn'>See Plan</button>
                </div>

                <div className='sub'>
                    <img src="https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary-cartoon-vector-illustration_138676-2206.jpg?w=2000" alt="" />

                    <button className='plan-btn'>See Plan</button>
                </div>
            </div>


        </div>
    );
};

export default Gallery;