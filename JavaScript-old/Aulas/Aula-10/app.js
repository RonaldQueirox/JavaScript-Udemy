/*
Eventos Js 

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado quando clique duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o clique do botão foi pressionado.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco.
onchange -> Disparado quando existe uma mudança no conteudo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solta sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. body.
onresize -> Disparado quando há um redimencionamento da janela.

*/
function evento_click() {
    document.body.style.backgroundColor = "yellow";
} 

function eventodbl_click() {
    document.body.style.backgroundColor = "green";
    alert('Evento de clique duplo');
} 

function muda_cor() {
    let div = document.getElementById("d1");
    div.style.backgroundColor = "orange";
} 

function muda_cor_roxo() {
    let div = document.getElementById("d1");
    div.style.backgroundColor = "purple";
}

function adiciona_texto() {
    let p = document.getElementById("d1")
   // p.append('O mouse moveu<br>') // append serve pra adicionar
}

function limpa_texto() {
    document.getElementById("campo_texto").value = "";
}

function mudou() {
    console.log('mudou')
}