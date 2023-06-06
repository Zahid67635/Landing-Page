import React, { useState } from 'react';
import './Modal.css'
const Modal = ({ toggleModal }) => {

    return (
        <div>
            <div className="modal" onClick={toggleModal}>
                <div className="overlay">
                </div>
                <div className="modal-content">
                    <h2>Hello there!!</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, dolorem sit eius nostrum fuga minus perspiciatis aspernatur ratione quia, ipsum dolores rerum obcaecati officia accusantium cupiditate tempora quaerat optio quibusdam?</p>
                    <button className='modal-btn' onClick={toggleModal}>Close</button>
                </div>
            </div>
        </div>



    );
};

export default Modal;