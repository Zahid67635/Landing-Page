import React, { useState } from 'react';
import './Gallery.css'
const Gallery = () => {
    const [toggle, setToggle] = useState(false)
    const [planNo, setPlanNo] = useState(0)
    const toggleplanOverlay = (n) => {
        setPlanNo(n)
        setToggle(!toggle)
    }

    return (
        <div id='plans'>
            <h1 className='head'>See Our Plans</h1>
            <div className='items-container'>
                <div className="sub">
                    <div className='sub planOverlayContainer'>
                        <img src="https://media.istockphoto.com/id/1236947979/vector/man-working-at-home-or-office-employees-working-over-a-video-conference-man-chatting-with.jpg?s=612x612&w=0&k=20&c=6dClzlgoqjAnsLnywhe3mDGgrfpAKSYjMQUamuY4iMs=" alt="" />
                        {
                            toggle && planNo === 1 ? <div className="planOverlay"><h1 className='head' style={{ color: 'white' }}>Plan - 01</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptate. Inventore cumque nihil repellendus, voluptas sint enim impedit temporibus quod harum voluptate amet, magni necessitatibus, porro repellat adipisci ipsum doloribus.</p>

                                <button className='planOverlay-btn' onClick={toggleplanOverlay}>Back</button>
                            </div> : <button onClick={() => toggleplanOverlay(1)}>See Plan</button>
                        }

                    </div>
                    <div className='sub planOverlayContainer'>
                        <img src="https://thumbs.dreamstime.com/b/business-men-office-cartoon-characters-people-sit-work-morning-illustration-vector-board-background-business-men-office-174502754.jpg" alt="" />
                        {
                            toggle && planNo === 2 ? <div className="planOverlay"><h1 className='head' style={{ color: 'white' }}>Plan - 03</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptate. Inventore cumque nihil repellendus, voluptas sint enim impedit temporibus quod harum voluptate amet, magni necessitatibus, porro repellat adipisci ipsum doloribus.</p>

                                <button className='planOverlay-btn' onClick={toggleplanOverlay}>Back</button>
                            </div> : <button onClick={() => toggleplanOverlay(2)}>See Plan</button>
                        }
                    </div>
                </div>
                <div className='sub'>
                    <div className='sub planOverlayContainer'>
                        <img src="https://img.freepik.com/premium-vector/vector-cartoon-illustation-man-working-laptop-computer-table_253349-583.jpg?w=2000" alt="" />
                        {
                            toggle && planNo === 3 ? <div className="planOverlay"><h1 className='head' style={{ color: 'white' }}>Plan - 02</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptate. Inventore cumque nihil repellendus, voluptas sint enim impedit temporibus quod harum voluptate amet, magni necessitatibus, porro repellat adipisci ipsum doloribus.</p>

                                <button className='planOverlay-btn' onClick={toggleplanOverlay}>Back</button>
                            </div> : <button onClick={() => toggleplanOverlay(3)}>See Plan</button>
                        }
                    </div>

                    <div className='sub planOverlayContainer'>
                        <img src="https://img.freepik.com/free-vector/man-working-laptop-with-coffee-stationary-cartoon-vector-illustration_138676-2206.jpg?w=2000" alt="" />
                        {
                            toggle && planNo === 4 ? <div className="planOverlay">
                                <h1 className='head' style={{ color: 'white' }}>Plan - 04</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, voluptate. Inventore cumque nihil repellendus, voluptas sint enim impedit temporibus quod harum voluptate amet, magni necessitatibus, porro repellat adipisci ipsum doloribus.</p>

                                <button className='planOverlay-btn' onClick={toggleplanOverlay}>Back</button>
                            </div> : <button onClick={() => toggleplanOverlay(4)}>See Plan</button>
                        }
                    </div>
                </div>
            </div>



        </div>
    );
};

export default Gallery;