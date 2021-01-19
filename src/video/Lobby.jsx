import React from 'react';
import "../style/Lobby.css"

const Lobby = ({
    username,
    handleUsernameChange,
    roomName,
    handleRoomNameChange,
    handleSubmit,
}) => {
    return (
        <div className='container-content-image'>
        <form  className="page-before-room" onSubmit={handleSubmit}>
            <div className="box-videochat">
                <h2 className="choice">Vous avez choisi de participer au live : {roomName}</h2>

                <div className="lobby-content">
                    <label htmlFor="name">
                        Il ne vous reste plus qu'à saisir votre nom:
                    </label>
                    <input
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <h3>Préparez vos ustensiles !</h3>

                {/* <div>
                    <label htmlFor="room">Room name:</label>
                    <input
                        type="text"
                        id="room"
                        value={roomName}
                        onChange={handleRoomNameChange}
                        required
                        disabled
                    />
                </div> */}

                <button type="submit">C'est parti !</button>
            </div>
        </form>
        </div>
    );
};

export default Lobby;
