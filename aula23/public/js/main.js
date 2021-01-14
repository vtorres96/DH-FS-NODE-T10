// Aula 1
// verificando se o arquivo foi linkado corretamente
// console.log('Hello World');

// pegando valor do que foi digitado no prompt
// let nome = prompt("Digite seu nome");
// console.log(nome);

// bloqueando para menores de 18 anos de forma simples
// let resposta = confirm("Você confirma ter 18 anos ?");

// if(!resposta){
//   window.location.reload(false);
// }


// Mostrar que dá para selecionar o elemento utilizando as classes que ele possui e até 
// mesmo o ID, e também, somente a classe e somente o ID
// document.querySelector('ul.navbar-nav.mr-auto') 
// document.querySelector('div#navbarNav') 
// document.querySelector('.navbar-nav.mr-auto') 
// document.querySelector('#navbarNav') 


// desafio mudar a cor das LI depois de 15 segundos que a página for carregada
// lembrando que não vale utilizar document.querySelector, somente o document.querySelectorAll

// Aula 2
let logo = document.querySelector(".logo");
let cards = document.querySelectorAll(".card-deck img");

logo.addEventListener("mouseover", function() {
  logo.style.transform = "rotate(180deg)";
});

logo.addEventListener("mouseout", function() {
  logo.style.transform = "rotate(-360deg)";
});

for (let i = 0; i < cards.length; i++) {
  cards[i].onmouseover = function(){
    this.classList.remove('shrink');
    this.classList.add('grow');
  }

  cards[i].onmouseout = function(){
    this.classList.remove('grow');
    this.classList.add('shrink');
  } 
}

window.onscroll = function() {
  myFunction()
};

let header = document.querySelector("nav");
let sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}