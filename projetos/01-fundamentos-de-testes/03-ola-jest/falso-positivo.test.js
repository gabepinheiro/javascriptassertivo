const { falsoPositivo } = require ('./falso-positivo')

describe('Falso positivo', () => {
  it('retorna um texto qualquer', () => {
    expect(falsoPositivo()).toEqual(expect.any(String))
  })
})