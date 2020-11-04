import { Link } from 'react-router-dom'
import {useState} from 'react'

import '../styles/landingPage.css';

function LandingPage() {

  const [roomName, setRoomName] = useState('');

  function updateRoomName(event){
    setRoomName(event.target.value);
  }

  return (
    <div className="container">
      <p className='title'>Better Know Them</p>
      <form>
        <input className='textField' type='text' placeholder='Room Name' onChange={updateRoomName}></input>
        <Link to={`/room/${roomName}`} className='makeRoomBtn' type='submit'>Create Room</Link>
      </form>
      <p className='instructions'>After of the creation of your room, give it's URL to your friends.</p>
    </div>
  );
}

export default LandingPage;
