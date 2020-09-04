const json = require('./json')

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node';

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

// criando função para listar todos os objetos que temos dentro do array de pets, ou seja,
// o propósito dessa função é listar todos animais contidos dentro da lista de pets
function listarPets() {
  for (let i = 0; i < pets.length; i++) {
    console.log("Nome: " + pets[i].nome)
    console.log("Tipo: " + pets[i].tipo)
  }
}

// criando função que será utilizada dentro da função cadastrarPet, esta função tem o propósito de 
// validar o objeto que estamos recebendo para certificar que iremos sempre passar um objeto válido
// para a função cadastrarPet
function validaDados(novoPet){
  return (
    novoPet.nome && 
    novoPet.tipo &&
    novoPet.raca &&
    novoPet.idade &&
    novoPet.genero &&
    // validando se o tipo da propriedade vacinado e booleano ou nao atraves do typeof 
    typeof novoPet.vacinado == "boolean"
  )
}

// criando função de cadastrar um novo pet dentro da nossa lista de pets que nada mais é que a variável pets
// que é o nosso array de objetos, ou seja, essa função tem propósito de adicionar um objeto contendo todas
// as propriedades válidas (nome, tipo, raca, idade e genero) para que tenhamos um novo elemento/pet dentro 
// da nossa lista de pets
function cadastrarPet(objetoPet) {
  if(typeof objetoPet == "object"){
    if(validaDados(objetoPet)){
      pets.push(objetoPet)
      console.log(pets)
    } else {
      console.log("O objeto não tem todas propriedades necessárias informadas")
    }
  } else { 
    console.log("Insira um objeto válido")
  }
}

// funcao que nosso colega Vitor Silvestre mostrou,  que é meio que uma segunda forma de fazer a funcao de 
// cadastrarPet que temos acima, porém, esta função invés de receber um objeto, ela tem como propósito 
// receber 5 parâmetros para tratá-los e criar um objeto a partir dos mesmos, sendo assim, iremos 
// ter o mesmo propósito de adicionar um elemento/pet dentro da nossa variável pets que é nosso array de objetos
function adicionarPetDoVitao(nome, tipo, raca, idade, genero){
  let novoPet = {
      nome: nome,
      tipo: tipo,
      raca: raca,
      idade: idade,
      genero: genero
  }
  pets.push(novoPet);
  console.log(pets)
}

// objeto criado apenas para ser passado como parâmetro dentro da chamada da função cadastrarPet 
// que está na linha 86
let objPet = {
  nome: 'Novo Pet',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido'
};

// essas chamadas as funções abaixo servem para executarmos as mesmas e estão comentadas, mas, 
// para conseguirem executar é só tirar o comentário de cada uma delas.
// cadastrarPet(objPet)
// listarPets()
// adicionarPetDoVitao('Victor', 'desconhecido', 'desconhecido', 25, 'desconhecido')


// Desafio - função para verificar animais vacinados ou aqueles que precisam de vacina, lembrando que está função irá receber um parâmetro.
// (podendo ser um único pet da lista, ou, caso queira fazer o Extra terá que trabalhar a lista por completo).
// (Extra - se quiserem efetuar uma listagem de animais vacinados e não vacinados)
// Dica: vocês podem criar uma propriedade vacinado e atribuir valores booleanos (true ou false)
 let objPetOrlando = {
  nome: "n3",
  tipo: "t3",
  raca: "vira",
  idade: 7,
  genero: "Macho",      
  vacinado: true
}

// desafio cumprido utilizando metodo do nosso colega Orlando que tem o propósito de retornar
// a quantidade e o nome de cada pet vacinado e também não vacinado em apenas uma função
function vacinadosOrlando(pets){
  let petsVacinados = [];
  let petsNaoVacinados = [];
  let numPetVac = 0;
  let numPetNVac = 0;

  for(let i = 0; i < pets.length; i++){
    if(pets[i].vacinado){
      petsVacinados.push(pets[i].nome);
      numPetVac = numPetVac + 1;
    } else{
      petsNaoVacinados.push(pets[i].nome)
      numPetNVac = numPetNVac + 1;
    }
  }
  console.log("Pets Vacinados: ("+numPetVac+")");
  console.log("Essa é a lista de animais vacinados: " + petsVacinados);

  console.log("Pets NÃO Vacinados: ("+numPetNVac+")");
  console.log("Essa é a lista de animais não vacinados: " + petsNaoVacinados);
}

// vacinadosOrlando(pets);

// funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais nao vacinados
function naoVacinados(array) {
  let vacinados= [];
  for(let i in array){
    if(!array[i].vacinado) vacinados.push(array[i]);
  }

  console.log(vacinados)
}

// funcao do nosso colega Arlei que esta retornando o array de objetos completo com todos animais vacinados
function vacinados(array) {
  let vacinados= [];
  for(let i in array){
    if(array[i].vacinado) vacinados.push(array[i]);
  }

  console.log(vacinados)
}

// naoVacinados(pets)
// vacinados(pets)

// callbacks
function calcular(numero1, numero2, operacao){
  operacao(numero1, numero2)
  console.log("A operação foi realizada com sucesso")
}

function soma(numero1, numero2){
  console.log(numero1 + numero2)
}

function subtrai(numero1, numero2){
  console.log(numero1 - numero2)
}

function divide(numero1, numero2){
  console.log(numero1 / numero2)
}

function multiplica(numero1, numero2){
  console.log(numero1 * numero2)
}
// calcular(10, 5, soma)

// Desafio - criar uma funcao callback chamada servicosPrestados que tenha como dois servicos: dar banho no pet e tosar o pet
// sendo assim teremos sempre que passar um pet da nossa lista de pets e tambem um servico que aquele pet ira utilzar
function servicosPrestados(pet, servico) {
    servico(pet)
}

function darBanhoNoPet(pet){
  pet.servicos.push("banho")
  console.log("O pet " + pet.nome + " tomou banho")
}

function tosarPet(pet){
  pet.servicos.push("tosa")
  console.log("O pet " + pet.nome + " foi tosado")
}

// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// Desafio - criar uma funcao que adicione todos esses pets da lista que esta contida na constante json 
// dentro da nossa lista de pets que e a variavel pets 
// lembrando que: nao precisa ter validacao de dados ta galera, por qual motivo ? 
// No json nao temos as propriedades vacinado, servicos
// dica : utilizar JSON.parse na sua string json para transformá-la em um array de objetos válidos

function cadastrarPetsDoJsonSpreadOperator(lista, json){
  let arrayPets = JSON.parse(json)
  lista.push(...arrayPets)
  return lista
}

function cadastrarPetsDoJsonFor(lista, json){
  let arrayPets = JSON.parse(json)
  for (let i = 0; i < arrayPets.length; i++) {
    lista.push(arrayPets[i])
  }
  return lista
}

// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))
// console.log(cadastrarPetsDoJsonFor(pets, json))