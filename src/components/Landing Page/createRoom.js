function createRoom(props, roomId) {
  fetch(`http://192.168.0.112:8000/room/create/${roomId}`, { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      if(data.isRoom === 'yes'){
        alert('That room alredy exists!');
      } else if(data.isRoom === 'no') {
        console.log(data);
        props.history.push(`/room/${roomId}`);
      }
    });
}

export default createRoom;
