// criacao de uma classe 
class Quadrado {
  // criacao de um método construtor
  constructor(ladoParam){
    // criacao de um atributo
    this.lado = ladoParam;
  }
  
  // criacao de um metodo
  calcularArea = () => {
    return this.lado * this.lado;
  }
}

let quadrado = new Quadrado(6);
console.log(quadrado.calcularArea());