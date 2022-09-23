const { somaHorasExtras, calculaDesconto } = require('./operacoes')

describe('Operações', () => {
  //para executar antes de todos os testes
  beforeAll(() => {
    console.log('Hook antes de todos os testes iniciar')
  }) 

  // para executar após todos os testes
  afterAll(() => {
    console.log('Hook após todos os testes')
  }) 

  // para executar antes de cada um dos testes iniciar
  beforeEach(() => {
    console.log('Hook antes de cada um dos testes iniciar')
  })

  // para executar após cada um dos testes finalizar
  afterEach(() => {
    console.log('Hook após cada um dos testes finalizar')
  }) 

  it.only('deve somar horas extras', () => {
    const esperado = 10
    const retornado = somaHorasExtras(5, 5)
  
    expect(retornado).toBe(esperado)
  })
  
  it('deve calcular descontos', () => {
    const esperado = 5
    const retornado = calculaDesconto(10, 5)
  
    expect(retornado).toBe(esperado)
  })
})
