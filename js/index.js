const groups = document.getElementById("groups");
const inputText = document.getElementById("name");

const exampleSocket = new WebSocket("ws://192.168.57.1:8080");

let selectedGroup = 'groupA'; 

groups.addEventListener("change", (event) => {
    selectedGroup = event.target.value;
    changeGroup(selectedGroup); 
});

document.querySelector("button").addEventListener("click", () => {
    const texto = inputText.value;
    exampleSocket.send(JSON.stringify({ text: texto, group: selectedGroup }));
});

exampleSocket.onopen = () => {
    let message = {'text' : 'Im Online Now'};
    exampleSocket.send(JSON.stringify(message));
    exampleSocket.send(JSON.stringify({ group: selectedGroup }));
};

exampleSocket.onmessage = (event) => {
    console.log(event.data);
    
};

function changeGroup(newGroup) {
    const change = { group: newGroup };
    exampleSocket.send(JSON.stringify(change));
}
