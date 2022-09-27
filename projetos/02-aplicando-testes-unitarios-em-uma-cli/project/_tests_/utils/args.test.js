import parse, { validateArgs } from '../../src/utils/args.js'

const data = {
  username: "admin",
  password: "admin",
  operation: "operacao",
  data: {
    uid: "abc-123"
  }
}

describe('Utils/args', () => {
  it('Faz o parse dos argumentos da CLI', () => {

    const argumentos = [
      '/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/node',
      '/Users/gabriel.ramos/.nvm/versions/node/v14.11.0/bin/jsassertivo',
      '--username=admin',
      '--password=admin',
      '--operation=operacao',
      '--data={"uid": "abc-123"}'
    ]
    
    expect(parse(argumentos)).toEqual(data)
  })
})

describe('Validação de argumentos da CLI', () => {
  it('deve validar com sucesso os campos informados', () => {
    const campos = ['username', 'password', 'operation', 'data']

    expect(validateArgs(data, campos).valid).toEqual(true)
  })

  it('deve validar os cenários de erro e retorna uma mensagem', () => {
    expect(validateArgs()).toEqual({
      valid: false,
      message: expect.any(String)
    })

    expect(validateArgs(data, ['email'])).toEqual({
      valid: false,
      message: expect.any(String)
    })
  })
})