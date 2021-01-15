import React from 'react';
import '../../style/ToggleModal.css';

const ToggleModal = ({ handleClickClose }) => {
    return (
        <div onClick={handleClickClose} className="overlay">
            <div className="contenu">contenu modale</div>
        </div>
    );
};

export default ToggleModal;
