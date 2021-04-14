import { io } from "socket.io-client";

const URL = process.env.ENDPOINT_URL;
const socket = io(URL);

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;