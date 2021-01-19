import React, { useState, useEffect } from "react";
import Video from "twilio-video";
import Participant from "./Participant";
import Chat from "../components/chat/Chat";
import { FiLogOut } from "react-icons/fi";

import "../style/Room.css";

const Room = ({ roomName, token, handleLogout }) => {
  const [room, setRoom] = useState(null);
  const [participants, setParticipants] = useState([]);

  useEffect(() => {
    const participantConnected = (participant) => {
      setParticipants((prevParticipants) => [...prevParticipants, participant]);
    };

    const participantDisconnected = (participant) => {
      setParticipants((prevParticipants) =>
        prevParticipants.filter((p) => p !== participant)
      );
    };

    Video.connect(token, {
      name: roomName,
    }).then((room) => {
      setRoom(room);
      room.on("participantConnected", participantConnected);
      room.on("participantDisconnected", participantDisconnected);
      room.participants.forEach(participantConnected);
    });

    return () => {
      setRoom((currentRoom) => {
        if (currentRoom && currentRoom.localParticipant.state === "connected") {
          currentRoom.localParticipant.tracks.forEach(function (
            trackPublication
          ) {
            trackPublication.track.stop();
          });
          currentRoom.disconnect();
          return null;
        } else {
          return currentRoom;
        }
      });
    };
  }, [roomName, token]);

  const remoteParticipants = participants.map((participant) => (
    <Participant key={participant.sid} participant={participant} />
  ));

  return (
    <div className='room'>
      <h2 className='name-room'>
        {" "}
        Bienvenue dans la room: {roomName}{" "}
        <button className='logout-live' onClick={handleLogout}>
          <FiLogOut />
        </button>
      </h2>

      <div className='room-videochat'>
        <div className='local-participant'>
          {room ? (
            <Participant
              key={room.localParticipant.sid}
              participant={room.localParticipant}
            />
          ) : (
            ""
          )}
        </div>
        <div className='remote-participants'>
          <h3>Remote Participants</h3>
          <div className='camera-remote'>{remoteParticipants}</div>
        </div>
        <Chat />
      </div>
    </div>
  );
};

export default Room;
