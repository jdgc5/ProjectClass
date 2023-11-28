import { WebSocketServer } from 'ws';
import http from 'http';

const server = http.createServer((req, res) => {
    res.end('Hello World!');
});

const wss = new WebSocketServer({ server });

const clientsGroup = {
    groupA: new Set(),
    groupB: new Set(),
    groupC: new Set(),
    groupD: new Set()
};

wss.on('connection', (ws) => {
    ws.send('Welcome to the WebSocket server!');
    clientsGroup['groupA'].add(ws); 

    ws.on('message', (message) => {
        try {
            let messageParsed = JSON.parse(message);
            let { text, group } = messageParsed;
            if (text){
                for (let client of clientsGroup[group]) {
                    if (client !== ws) {
                        client.send(JSON.stringify({ text, group }));
                    }
                }
            } 
            if (group && !text) {
                deleteGroup(ws); 
                clientsGroup[group].add(ws); 
                ws.send(`You joined group ${group}`); 
            } 
            console.log('Message: ', messageParsed);
        } catch (error) {
            console.log('Error parsing message', error);
        }
    });

    ws.on('close', () => {
        deleteGroup();
    });
});

server.listen(8080, () => {
    console.log('Server running on port 8080');
});

function deleteGroup(ws){
    for (const group in clientsGroup){
        clientsGroup[group].delete(ws);
    }
}