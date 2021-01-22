let cep = document.querySelector('#cep');
let rua = document.querySelector('#rua');
let bairro = document.querySelector('#bairro');
let uf = document.querySelector('#uf');

cep.oninput = () => {
  if(cep.value != '' && cep.value.length == 9){
    fetch('https://viacep.com.br/ws/' + cep .value + '/json/')
    .then(response => {
      return response.json();
    })
    .then(data => {
      rua.value = data.logradouro;
      bairro.value = data.bairro;
      uf.value = data.uf;
    });
  }
} 