const { PeerServer } = require('peer');
const port = process.env.PORT || 9000;

const peerServer = PeerServer({
  port: port,
  path: '/myapp',
  proxied: true
});

console.log(`PeerJS signaling server running on port ${port}`);
