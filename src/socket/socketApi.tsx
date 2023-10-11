import io from 'socket.io-client';

const socket = io("http://192.168.11.142:4000");

export default socket;