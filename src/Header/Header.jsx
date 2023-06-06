import React, { useState } from 'react';
import './Header.css'
import Modal from '../Modal/Modal';
const Header = () => {
    const [modal, setModal] = useState(false)
    const toggleModal = () => {
        setModal(!modal)
    }
    return (
        <div className='header'>
            <div>
                <h1>Welcome to the Virtual World Where You Get Virtual Apps!</h1>
                <div className='butto'>
                    <button onClick={toggleModal}>Open Modal</button>
                </div>
            </div>
            {modal && <Modal toggleModal={toggleModal}></Modal>}

        </div>
    );
};

export default Header;