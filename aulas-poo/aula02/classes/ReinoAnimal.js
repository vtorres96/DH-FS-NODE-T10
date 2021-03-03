class Animal {
  _peso;
  _idade;

  getPeso = () => {
    return this._peso;
  }

  setPeso = (pesoParam) => {
    return this._peso = pesoParam;
  }

  comer = () => {
    console.log('Estou comendo')
  }

  dormir = () => {
    console.log('Estou dormindo')
  }

  locomover = () => {
    console.log('Estou me locomendo')
  }

  cumprimentar = () => {
    console.log(`Olá meu nome é XXX, minha idade é ${this._idade} 
    e peso é ${this._peso}`)
  }
}

let animal = new Animal();
animal.setPeso(300);
console.log(animal.getPeso());
animal.cumprimentar();


// Na Herança de classes, conseguimos fazer com que uma classe herde métodos
// de outra classe, costumamos dizer que a classe que herda é a classe filha
// e a classe que está servindo de "modelo" é a classe pai.
// No exemplo abaixo, a classe Ave está herdando métodos e atributos da classe
// Animal, ou seja, ao instanciar um novo objeto da classe Ave conseguiremos utilizar
// os métodos comer, dormir, e locomover da classe Animal.
class Ave extends Animal {
  voar = () => {
    console.log('Estou voando')
  }
}

let ave = new Ave()
// ave.voar()
// ave.comer()
// ave.dormir()