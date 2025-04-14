// Manipulação de dados do Formulário

// SELECIONE TODOS OS ELEMENTOS QUE DESEJA MANIPULAR

let Formulario = document.querySelector('form');
let cx_nome = document.querySelector('#nome');
let cx_idade = document.querySelector('#idade');
let cx_peso = document.querySelector('#peso');
let cx_altura = document.querySelector('#altura')
let cx_imc = document.querySelector('#imc');

let aviso = document.querySelector('#aviso');
let dados = document.querySelector('.pessoa');

let btn_enviar = document.querySelector('#btn_enviar');
let btn_limpar = document.querySelector('#btn_limpar');

/* PARA PEGAR OS DADOS QUE ESTÃO DENTRO DAS
CAIXAS USE A PROPRIEDADE .value
MAS, ANTES DETERMINE UM EVENTO COMO
REFERENCIA PARA PEGAR OS DADOS */

// Adicionei escutador para o btn_enviar
// Uma função anonima para pegar os valores
// calcular o imc
btn_enviar.addEventListener('click', function (e) {
    // Pegar os values de cada input
    let nome = cx_nome.value
    let idade = cx_idade.value
    let peso = cx_peso.value
    let altura = cx_altura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    console.log(nome)
    console.log(idade)
    console.log(peso)
    console.log(altura)
    console.log(imc)

    cx_imc.value = imc
    let sit = situação_do_peso(imc)
    aviso.textContent = sit

    // SAIDA DE DADOS

    alert(
        'Nome ' + nome + '\n' +
        'Idade ' + idade + ' anos\n' +
        'Peso ' + peso + 'Kg\n' +
        'Altura ' + altura + 'm\n' +
        'IMC' + imc + ' ' +
        sit
    );

    let pessoa = {
        nome: nome,
        idade: idade,
        peso: peso,
        altura: altura,
        imc : imc,
        sit : sit,
    }

    console.log(pessoa)
    dados[1].textContent = pessoa.nome
    dados[2].textContent = pessoa.idade + " anos"
    dados[3].textContent = pessoa.peso + " Kg"
    dados[4].textContent = pessoa.altura + " m"
    dados[5].textContent = pessoa.imc + " " + pessoa.sit
    
    // Prevenir o comportamento padrão
    e.defaultPrevented()
});

function situação_do_peso(imc) {
    let situação = ''
    if (imc < 18.5) {
        situação = 'Baixo peso'
    } else if (imc >= 18.5 && imc <= 24.9) {
        situação = 'Peso Normal'
    } else if (imc >= 25 && imc <= 29.9) {
        situação = 'Sobrepeso'
    } else if (imc >= 30 && imc <= 34.9) {
        situação = 'Obesidade I'
    } else if (imc >= 35 && imc <= 39.9) {
        situação = 'Obesidade II'
    } else if (imc >= 40 && imc <= 44.9) {
        situação = 'Obesidade III'
    } else if (imc > 45) {
        situação = 'Obesidade IV'
    } else {
        situação = 'Informe seu peso corretamente'
    }
    return situação
}
