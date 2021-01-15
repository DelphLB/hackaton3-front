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
        <form  className="page-before-room" onSubmit={handleSubmit}>
            <div className="box-videochat">
                <h2 className="choice">Vous avez choisi de participer au live : {roomName}</h2>

                <div>
                    <label htmlFor="name">
                        Il ne vous reste qu'à entrez votre nom:
                    </label>
                    <input
                        type="text"
                        id="field"
                        value={username}
                        onChange={handleUsernameChange}
                        required
                    />
                </div>
                <p>Préparez vos ustensiles, c'est parti !</p>

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

                <button type="submit">Submit</button>
            </div>
        </form>
    );
};

export default Lobby;
