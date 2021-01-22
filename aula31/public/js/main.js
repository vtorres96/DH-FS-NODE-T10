// Aula 1
// verificando se o arquivo foi linkado corretamente
// console.log('Hello World');

// pegando o que foi digitado no prompt
// let nome = prompt('Digite seu nome abaixo');
// console.log(nome);

// bloqueando usuario menor de idade de acessar nossa página
// de uma forma simples
// let maiorDeIdade = confirm('Você confirma ter ao menos 18 anos?');

// if(!maiorDeIdade){
//   window.location.reload();
// }

// selecionando elementos com querySelector e querySelectorAll
// document.querySelector - seleciona apenas primeiro elemento encontrado
// document.querySelectorAll - seleciona todos elementos encontrados retornando uma lista
// Formas de utilizar/selecionar elementos:
// - por ID: document.querySelector('#navbarNav');
// - por Classe: document.querySelector('.navbar-nav');
// - por tag: document.querySelector('ul');
// - por tag com classe: document.querySelector('ul.navbar-nav');
// - por tag com id: document.querySelector('div#navbarNav');

// selecionando elementos apenas pela tag - getElementByTagName
// document.getElementsByTagName('h1') - sempre tem a necessidade de receber como 
// parâmetro uma tag e não podemos utilizar ela junto a classes ou id's. Como por exemplo:
// 'h1.titulo', isso já não funcionaria. Lembrando que caso exista mais de um elemento,
// seleciona todos elementos retornando uma lista, ou, caso não encontre elementos retorna vazio.

// selecionando elementos apenas pelo ID - getElementById
// document.getElementById('navbarNav') - sempre tem a necessidade de receber como 
// parâmetro um ID existente em uma tag. Lembrando, caso exista o elemento com o ID
// retorna o único elemento encontrado (devido ID ser único para cada elemento, portanto,
// este método sempre retornará apenas um elemento), ou, caso não encontre retorna null.

// selecionando elementos apenas pela classe - getElementsByClassName
// document.getElementsByClassName('navbar-nav') - sempre tem a necessidade de receber como 
// parâmetro uma classe existente em uma tag. Lembrando, caso exista o elemento com a classe
// retorna o elemento encontrado ou caso existam mais elementos, retorna uma lista
// , ou, caso não encontre retorna vazio.


// Aula 2 - Eventos

// rotacionando logo ao passar / retirar mouse
let logo = document.querySelector('.logo');

logo.addEventListener('mouseover', function() {
  logo.style.transform = 'rotate(180deg)';
});

logo.addEventListener('mouseout', function() {
  logo.style.transform = 'rotate(0deg)';
});

// menu fixo ao scrollar a pagina para baixo
let header = document.querySelector('.navbar');

window.onscroll = function fixandoHeader(){
  if(window.pageYOffset > 0){
    header.style.opacity = '1';
  } else {
    header.style.opacity = '0.7';
  }
}

// aplicando zoom ao passar / retirar mouse dos cards
let cards = document.querySelectorAll('.card-deck img');

for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener('mouseover', function(){
    this.classList.add('grow');
    this.classList.remove('shrink');
  });

  cards[i].addEventListener('mouseout', function(){
    this.classList.add('shrink');
    this.classList.remove('grow');
  });
}

// Aula 3 - Formulários
let camposFormulario = document.querySelector('form').elements;
let form = document.querySelector('#form-contato');

for (let i = 0; i < camposFormulario[2]; i++) {
  camposFormulario[i].addEventListener('focus', function(){
    this.style.backgroundColor = '#eee';
  });

  camposFormulario[i].addEventListener('blur', function(){
    this.style.backgroundColor = '#fff';
  });
}

// Aula 4 - PARTE 2 VALIDACAO E AJAX
form.addEventListener('submit', function(event){
  // previnindo comportamento default - atualizacao da pagina
  event.preventDefault();

  let nome = document.querySelector('#input-nome');
  let email = document.querySelector('#input-email');
  let mensagem = document.querySelector('#textarea-mensagem');

  if(validaFormContato(nome, email, mensagem)){
    enviaFormContato(nome, email, mensagem);
    limpaFormContato();
  }
});

function validaFormContato(nomeParam, emailParam, mensagemParam){
  let invalidFeedbacks = document.querySelectorAll('.invalid-feedback');
  
  if(nomeParam.value === '' || emailParam.value === '' || mensagemParam.value === ''){
    if(nomeParam.value === ''){
      nomeParam.classList.add('is-invalid');
      invalidFeedbacks[0].innerHTML = 'Nome obrigatório';
    }
  
    if(emailParam.value === ''){
      emailParam.classList.add('is-invalid');
      invalidFeedbacks[1].innerHTML = 'E-mail obrigatório';
    }
  
    if(mensagemParam.value === ''){
      mensagemParam.classList.add('is-invalid');
      invalidFeedbacks[2].innerHTML = 'Mensagem obrigatória';
    }

    return false
  } else { 
    return true;
  }
}

function enviaFormContato(nomeParam, emailParam, mensagemParam){
  let data = {
    "name": nomeParam.value,
    "email": emailParam.value,
    "message": mensagemParam.value
  };

  let headers = {
    "Content-Type": "application/json",
    "Access-Control-Origin": "*"
  };

  fetch('http://localhost:3000/contato/registrar', {
    method: 'POST',
    headers: headers,
    body: JSON.stringify(data)
  })
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    exibeOcultaMensagemDeSucesso(data.message);
  });
}

function exibeOcultaMensagemDeSucesso(mensagem){
  let mensagemDeSucesso = document.querySelector('.message-success');
  mensagemDeSucesso.innerHTML = mensagem;
  mensagemDeSucesso.classList.remove('d-none');

  setTimeout(() => {
    mensagemDeSucesso.classList.add('d-none');
  }, 1500);
}

function limpaFormContato(){
  document.querySelector('form').reset();
}