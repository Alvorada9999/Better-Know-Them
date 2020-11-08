function enterRoom(props, roomId) {
  if (roomId !== "") {
    fetch(`http://192.168.0.112:8000/room/enter/${roomId}`, { mode: "cors" })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.isRoom === "yes") {
          props.history.push(`/room/${roomId}`);
        } else if (data.isRoom === "no") {
          alert("That room does not exists!");
        }
      });
  } else {
    alert("You must put the room name!");
  }
}

export default enterRoom;