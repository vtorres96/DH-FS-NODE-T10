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
let nome = document.querySelector('#input-nome');
let email = document.querySelector('#input-email');
let mensagem = document.querySelector('#textarea-mensagem');
let camposFormulario = document.querySelector('form').elements;
let form = document.querySelector('#form-contato');
let invalidFeedbacks = document.querySelectorAll('.invalid-feedback');

// Desafio - ao receber foco nos campos, o campo deve ter seu background-color mudado,
// para indicar ao usuário qual o campo ele está no momento.
// nome.addEventListener('focus', function(){
//   this.style.backgroundColor = '#eee'
// });

// nome.addEventListener('blur', function(){
//   this.style.backgroundColor = '#fff'
// });

// email.addEventListener('focus', function(){
//   this.style.backgroundColor = '#eee'
// });

// email.addEventListener('blur', function(){
//   this.style.backgroundColor = '#fff'
// });

// mensagem.addEventListener('focus', function(){
//   this.style.backgroundColor = '#eee'
// });

// mensagem.addEventListener('blur', function(){
//   this.style.backgroundColor = '#fff'
// });

for (let i = 0; i < camposFormulario.length; i++) {
  camposFormulario[i].addEventListener('focus', function(){
    this.style.backgroundColor = '#eee';
  });

  camposFormulario[i].addEventListener('blur', function(){
    this.style.backgroundColor = '#fff';
  });
}

form.addEventListener('submit', function(event){
  // previnindo comportamento default - atualizacao da pagina
  event.preventDefault();

  if(nome.value === ''){
    nome.classList.add('is-invalid');
    invalidFeedbacks[0].innerHTML = 'Nome obrigatório';
  }

  if(email.value === ''){
    email.classList.add('is-invalid');
    invalidFeedbacks[1].innerHTML = 'E-mail obrigatório';
  }

  if(mensagem.value === ''){
    mensagem.classList.add('is-invalid');
    invalidFeedbacks[2].innerHTML = 'Mensagem obrigatória';
  }
});