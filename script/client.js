// client.js

var socket = io('http://localhost:3000');
const l = console.log
function getEl(id) {
    return document.getElementById(id)
}
const editor = getEl("editor")
editor.addEventListener("keyup", (evt) => {
    const text = editor.value
    socket.send(text)
})
socket.on('message', (data) => {
    editor.value = data
})
