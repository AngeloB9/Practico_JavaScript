function calcularMediaAritmetica(lista) {
  const sumaLista = lista.reduce(function (valorAcumulado = 0, nuevoElemento) {
    return valorAcumulado + nuevoElemento;
  });

  const promedioLista = sumaLista / lista.length;

  return promedioLista;
}

function getMedian(lista) {
  const sortList = lista.sort((a, b) => a - b);
  const mitadLista1 = parseInt(lista.length / 2);

  function esPar(numero) {
    if (numero % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }
  let mediana;
  if (esPar(lista.length)) {
    const elemento1 = sortList[mitadLista1 - 1];
    const elemento2 = sortList[mitadLista1];
    const promedio = calcularMediaAritmetica([elemento1, elemento2]);
    mediana = promedio;
  } else {
    mediana = sortList[mitadLista1];
  }
  return mediana;
}
