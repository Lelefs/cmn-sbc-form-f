import socketio from 'socket.io-client';

const connectionApi =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3333'
    : 'https://cmn-sbc-form-b.herokuapp.com';

const socket = socketio(connectionApi, {
  autoConnect: false,
});

function subscribeToNewCheckin(subscribeFunction) {
  socket.on('novo-checkin', subscribeFunction);
}

function connect() {
  socket.connect();
}

function disconnect() {
  if (socket.connected) {
    socket.disconnect();
  }
}

export { connect, disconnect, subscribeToNewCheckin };
