import React from 'react';
import '../../style/ToggleModal.css';

import { FiSmile } from 'react-icons/fi';


const ToggleModal = ({ handleClickClose }) => {
    return (
        <div onClick={handleClickClose} className="overlay">
            <div className="contenu">
                <p>Bonjour chef cuisinier,</p>{' '}
                <p>Vous souhaitez proposer un cours de cuisine en direct ?</p>{' '}
                <p>Connectez-vous à Cook'eat et patagez votre talent!</p>
            </div>
        </div>
    );
};

export default ToggleModal;
