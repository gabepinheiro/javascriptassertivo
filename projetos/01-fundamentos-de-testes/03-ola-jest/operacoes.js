function somaHorasExtras (salario, extras) {
  return salario + extras
}

function calculaDesconto (salario, descontos) {
  return salario - descontos
}

module.exports = {
  somaHorasExtras,
  calculaDesconto
}