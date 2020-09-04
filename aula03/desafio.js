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