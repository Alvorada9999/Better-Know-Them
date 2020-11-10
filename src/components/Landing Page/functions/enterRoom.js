function enterRoom(props, roomId) {
  if (roomId !== "") {
    fetch(`https://sleepy-hamlet-51050.herokuapp.com/room/enter/${roomId}`, { mode: "cors" })
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
