// Criar uma classe Retangulo 
// que terá dois atributos no método construtor: base e altura
// que terá um método calcularArea que retornará a área do retângulo
class Retangulo {
  constructor(baseParam, alturaParam){
    this.base = baseParam;
    this.altura = alturaParam;
  }

  calcularArea(){
    return this.base * this.altura;
  }
}

let retangulo = new Retangulo(6, 4);
console.log(retangulo.calcularArea());