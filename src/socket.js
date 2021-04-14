import { io } from "socket.io-client";

const URL = "http://localhost:3000";
const socket = io(URL);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

socket.on('message', ({ content }) => {

});

socket.emit('message', { content: 'lol noob'})

export default socket;