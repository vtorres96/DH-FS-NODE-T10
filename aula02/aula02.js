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
    vacinado: true
  },
  {
    nome: 'Pituco',
    tipo: 'pássaro',
    raca: 'calopsita',
    idade: 3,
    genero: 'Fêmea',
    vacinado: false
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
  return (novoPet.nome && novoPet.tipo && novoPet.raca && novoPet.idade && novoPet.genero && novoPet.vacinado)
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
