const json = require('./json')
const { 
  listarPets, 
  validaDados, 
  cadastrarPet,
  vacinadosOrlando,
  servicosPrestados,
  darBanhoNoPet,
  tosarPet,
  cadastrarPetsDoJsonSpreadOperator,
  filtraPetPorNome,
  removerPet,
  atualizaPet
} = require("./funcoes-pet")
const {
  calcular,
  soma,
  subtrai,
  divide,
  multiplica
} = require("./calculadora")

// relembrando criação de uma variável com let recebendo valor de uma string
let organizacao = 'Petshop Node'

// criando um array contendo objetos, onde, a idéia deste array é criar uma lista de animais
// de modo que cada objeto irá representar um animal dentro da nossa lista de pets
let pets = [
  {
    id: 1,
    nome: 'Yoshi',
    tipo: 'cachorro',
    raca: 'Akita inu',
    idade: 6,
    genero: 'Masculino',
    vacinado: true,
    servicos: []
  },
  {
    id: 2,
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false,
    servicos: []
  }
];

// testando funcao listarPets
// listarPets(pets)

let objPetTeste = {
  nome: 'Novo Pet 2',
  tipo: 'desconhecido',
  raca: 'desconhecido',
  idade: 3,
  genero: 'desconhecido',
  vacinado: false
};

// testando funcao cadastrarPet
// cadastrarPet(pets, objPetTeste)

// testando funcao vacinadosOrlando
// vacinadosOrlando(pets)

// testando funcoes callback darBanhoNoPet e tosarPet
// servicosPrestados(pets[0], darBanhoNoPet)
// servicosPrestados(pets[0], tosarPet)

// testando funcao cadastrarPetsDoJsonSpreadOperator
// console.log(cadastrarPetsDoJsonSpreadOperator(pets, json))

// testando funcao filtraPetPorNome
// console.log(filtraPetPorNome(pets, 'Yoshi'))

// testando funcao removerPet
// removerPet(pets, 1)

let objetoPetAtualizado = {
  nome: "Atualizando Nome",
  tipo: "Atualizando Tipo",
  raca: "siames",
  idade: 3,
  genero: "Fêmea",      
  vacinado: false
}

// testando funcao atualizaPet
// atualizaPet(pets, 2, objetoPetAtualizado)

// testando funcao callback calculadora
// calcular(10, 5, soma)