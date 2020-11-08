function createRoom(props, roomId) {
  if (roomId !== "") {
    fetch(`http://192.168.0.112:8000/room/create/${roomId}`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.isRoom === "yes") {
          alert("That room alredy exists!");
        } else if (data.isRoom === "no") {
          props.history.push(`/room/${roomId}`);
        }
      });
  } else {
    alert("You must put the room name!");
  }
}

export default createRoom;
