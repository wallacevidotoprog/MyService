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


function Pesquisa(pg){
    var divFront = document.getElementById("pages")
     console.log(dados={
         Pagina: pg,
         DIV: divFront
     });
    divFront.innerHTML = '<?php ActivePage($pg);?>';
    console.log(divFront.innerHTML)
    // alert(pg+' - '+divFront.item)
    // console.log(dados={
    //     Pagina: pg,
    //     DIV: divFront
    // });
}
