import React from 'react';
import '../../style/ToggleModal.css';

import { FiSmile } from 'react-icons/fi';


const ToggleModal = ({ handleClickClose }) => {
    return (
        <div onClick={handleClickClose} className="overlay">
            <div className="contenu">Vous voulez faire un live ? Connectez vous ! <FiSmile /></div>
        </div>
    );
};

export default ToggleModal;
