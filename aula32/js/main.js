let form = document.querySelector('#form-contact');
let nome = document.querySelector('input[name="nome"]');
let email = document.querySelector('input[name="email"]');
let mensagem = document.querySelector('textarea[name="mensagem"]');
let marketing = document.querySelector('input[name="marketing"]');
let newsletter = document.querySelector('input[name="newsletter"]');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  let data = {
    "nome": nome.value,
    "email": email.value,
    "mensagem": mensagem.value,
    "marketing": marketing.value,
    "newsletter": newsletter.value,
  }  
  
  // transformando em array para adicionar item
  let contatos = JSON.parse(localStorage.getItem('contatos')) || [];

  // adicionando item dentro do array
  contatos.push(data)

  // enviando o array com novo item para localStorage
  localStorage.setItem('contatos', JSON.stringify(contatos));

  exibeMensagem();
});

const exibeMensagem = () => {
  let mensagem = document.querySelector('.message-contact');

  mensagem.classList.remove('d-none');

  setTimeout(() => {
    mensagem.classList.add('d-none');
  }, 1500);
}
