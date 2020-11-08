import { useState } from "react";

import "../../styles/landingPage.css";

import enterRoom from "./functions/enterRoom";
import createRoom from "./functions/createRoom";

function LandingPage(props) {
  const [roomName, setRoomName] = useState("");

  function updateRoomName(event) {
    setRoomName(event.target.value);
  }

  function makeEnterRoom(event) {
    event.preventDefault();
    enterRoom(props, roomName);
  }

  function makeCreateRoom(event) {
    event.preventDefault();
    createRoom(props, roomName);
  }

  return (
    <div className="container">
      <p className="title">Better Know Them</p>
      <form>
        <input
          className="textField"
          type="text"
          placeholder="Room Name"
          onChange={updateRoomName}
        ></input>
        <button onClick={makeEnterRoom}>Enter Room</button>
        <button onClick={makeCreateRoom}>Create Room</button>
      </form>
      <p className="instructions">
        After the creation of your room, give it's name to your friends.
      </p>
    </div>
  );
}

export default LandingPage;
