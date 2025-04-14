let area = document.getElementById('area')

function entrar() {
	let nome = prompt("Digite seu nome");

	// Bloco Condicional 
	// Caso o Nome seja vazio ou nulo

	if (nome === '' || nome === null) {
		alert("Ops algo deu Errado")
		area.innerHTML = "Clique no botão pra acessar... "
	}else {
		area.innerHTML = "Bem Vindo " + nome + " ";

		let botaoEsc = document.createElement("button");
		botaoEsc.innerHTML = "Sair da Conta"
		botaoEsc.onclick = sair;

		area.appendChild(botaoEsc)
	}
}

function sair() {
	alert("Até Mais!");
	area.innerHTML = "Você Saiu!"
}

function mediaAluno(a, b) {
	let media = (a + b) / 2
	if (media >= 6) {
		console.log("Aprovado Com a Media: " + media)
	 } else if (media < 6) {
		console.log("Infelizemente Sua Media foi: " + media)
	 } else {
		console.log("Reprovado")
	 }
}

mediaAluno(8, 7)

function Aluno(nome, curso) {
	let msg = "Seja Bem Vindo " + nome + " Ao Curso de " + curso

	console.log(msg)
}

Aluno("Hulk Magrelo", "Enfermagem")