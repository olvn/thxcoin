import { io } from "socket.io-client";

const URL = process.env.VUE_APP_ENDPOINT_URL;
console.log(process.env)
const socket = io(URL);

socket.onAny((event, ...args) => {
  // console.log(event, args);
});

export default socket;