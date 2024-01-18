function displayMessage(event) {
    var message = event.data;
    alert(message);
    event.source.postMessage("Recebido com sucesso!",  "*");
}
window.addEventListener("message", displayMessage, false)
