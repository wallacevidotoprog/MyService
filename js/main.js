function teste(){
    //enviar msg para o iframe
    var iframe = document.getElementById("framC").contentWindow;
    iframe.postMessage("wallace vidoto de miranda do Site", "*"); 
}


function displayMessage(event) {
    var message = event.data;
    alert(message);
    event.source.postMessage("Recebido com sucesso!",  "*");
}
window.addEventListener("message", displayMessage, false)