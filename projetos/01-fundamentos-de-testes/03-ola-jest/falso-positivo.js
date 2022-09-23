function funcaoInterna () {
  console.log('salvar algum dado')
}

function falsoPositivo () {
  funcaoInterna()
  return 'texto qualquer'
}

module.exports = {
  falsoPositivo
}