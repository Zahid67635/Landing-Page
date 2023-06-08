import React from 'react';
import './Gallery.css'
const Gallery = () => {
    return (
        <div id='plans'>
            <h1 className='head'>See Our Plans</h1>
            <div className='items-container'>
                <div className="sub">
                    <div className='sub'>
                        <img src="https://media.istockphoto.com/id/1236947979/vector/man-working-at-home-or-office-employees-working-over-a-video-conference-man-chatting-with.jpg?s=612x612&w=0&k=20&c=6dClzlgoqjAnsLnywhe3mDGgrfpAKSYjMQUamuY4iMs=" alt="" />

                        <button>See Plan</button>
                    </div>
                    <div className='sub'>
                        <img src="https://thumbs.dreamstime.com/b/business-men-office-cartoon-characters-people-sit-work-morning-illustration-vector-board-background-business-men-office-174502754.jpg" alt="" />

                        <button>See Plan</button>
                    </div>
                </div>
                <div className='sub'>
                    <div className='sub'>
                        <img src="https://img.freepik.com/premium-vector/vector-cartoon-illustation-man-working-laptop-computer-table_253349-583.jpg?w=2000" alt="" />

                        <button>See Plan</button>
                    </div>

                    <div className='sub'>
                        <img src="https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary-cartoon-vector-illustration_138676-2206.jpg?w=2000" alt="" />

                        <button>See Plan</button>
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Gallery;