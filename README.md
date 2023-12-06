# WebSocket Chat Server

This program is a chat server using WebSockets, enabling clients to connect, send text messages, and switch between chat groups.

## Features

- WebSocket Connection: Clients can connect to the server using WebSockets.
- Chat Groups: Clients can join different chat groups to communicate with other users in the same group.
- Text Messages: Users can send text messages to the group they are connected to.

### Usage

1. **Clone the repository**: `git clone https://github.com/your-username/projectClass.git`
2. **Install dependencies**: `npm install`
3. **Run the server**: `node index.js`
4. **Configure ip to connect in client** : `const exampleSocket = new WebSocket("ws://192.168.57.1:8080"); (line4 js/index.js)`
5. **Connect WebSocket clients to**: `ws://localhost:8080`

### Requirements

- Node.js
- Compatible WebSocket client (e.g., a browser with WebSocket support or a compatible client application)

### Execution

Ensure Node.js is installed, then run the server using the command `node server.js`. Connect WebSocket clients to `ws://localhost:8080`.

### Notes

Classroom Exercise by J.David Garcia Corzo.

