const url = `ws://localhost:1234/websocket`
const server = new WebSocket(url)

const massges = document.getElementById('')
const input = document.getElementById('massges')
const button = document.getElementById('send')


button.disabled = true
button.addEventListener('click', sendmassge, false)


server.onopen = function () {
    button.disabled = true
}
function sendmassge() {
    const text = input.value
    server.send(text)
}