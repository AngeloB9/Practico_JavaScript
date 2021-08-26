//Código del cuadrado
console.group('Cuadrado');
//const ladoCuadrado = 5;
//console.log('Los lados del cuadrado miden: ' + ladoCuadrado + ' cm');

function perimetroCuadrado(lado) {
  return lado * 4;
}
perimetroCuadrado(12);
// console.log('El perimetro del cuadrado es: ' + perimetroCuadrado + ' cm');

function areaCuadrado(lado) {
  return lado * lado;
}
// console.log('El área del cuadrado es: ' + areaCuadrado + 'cm²');
console.groupEnd();

//Código del triángulo
console.group('Triangulo');

function perimetroTriangulo(lado1, lado2, base) {
  return lado1 + lado2 + base;
}
// console.log('El perimetro del triángulo es: ' + perimetroTriangulo + ' cm');

function areaTriangulo(base, altura) {
  return (base * altura) / 2;
}
// console.log('El área del triángulo es: ' + areaTriangulo + ' cm²');
console.groupEnd();

//Código del Círculo
console.group('Circulo');
//Diametro
function diametroCirculo(radioC) {
  return radioC * 2;
}
//PI
const PI = Math.PI;
//console.log('PI es : ' + PI);
//Circunferencia
function perimetroCirculo(radio) {
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}
//console.log('El perimetro del circulo es: ' + perimetroCirculo + ' cm');
//Area
function areaCirculo(radioC) {
  return radioC * radioC * PI;
}
//console.log('El área del circulo es: ' + areaCirculo + ' cm²');

console.groupEnd();

//Aquí interactuamos con el HTML
function calcularPerimetroCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCuadrado() {
  const input = document.getElementById('InputCuadrado');
  const value = input.value;
  const area = areaCuadrado(value);
  alert(area);
}

function alturaTrianguloIsosceles(
  trianguloGrandeLadoA,
  trianguloGrandeLadoB,
  trianguloGrandeLadoBase
) {
  if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
    console.error('Los lados a y b no son iguales');
  } else {
    const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
    const trianguloPequenoLadoBase = trianguloGrandeLadoA;

    const trianguloPequenoLadoBCuadrado =
      trianguloPequenoLadoB * trianguloPequenoLadoB;
    const trianguloPequenoLadoBaseCuadrado =
      trianguloPequenoLadoBase * trianguloPequenoLadoBase;

    const trianguloPequenoLadoA = Math.sqrt(
      trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado
    );

    const trianguloGrandeAltura = trianguloPequenoLadoA;
    return trianguloGrandeAltura;
  }
}
