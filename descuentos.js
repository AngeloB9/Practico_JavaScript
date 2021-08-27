const precioOrginal = 120;
const descuento = 18;

function calcularPrecioConDescuento(precio, descuento) {
  const porcentajePrecioDescuento = 100 - descuento;
  const precioConDescuento = (precio * porcentajePrecioDescuento) / 100;
  return precioConDescuento;
}

// console.log({
//   precioOrginal,
//   descuento,
//   porcentajePrecioDescuento,
//   precioConDescuento,
// });

function onClickButtonPriceDiscount() {
  const inputPrice = document.getElementById('inputPrice');
  const priceValue = inputPrice.value;
  const inputDiscount = document.getElementById('inputDiscount');
  const priceDiscount = inputDiscount.value;
  const precioConDescuento = calcularPrecioConDescuento(
    priceValue,
    priceDiscount
  );
  const resultPrice = document.getElementById('resultPrice');
  resultPrice.innerHTML = 'El precio con descuento es $ ' + precioConDescuento;
}
