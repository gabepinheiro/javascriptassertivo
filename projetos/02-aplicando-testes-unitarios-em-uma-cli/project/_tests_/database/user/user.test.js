import { getUserByUid } from "../../../src/database/user/read.js"

import { loadDatabase } from '../../../src/database/file.js'

jest.mock('../../../src/database/path.js')
jest.mock('../../../src/database/file.js')

// extraimos dados para uma variaǘel mockUsuario
const mockUsuario =  {
  uid: 'abc-1234',
  userName: 'NomeDeUsuario',
  lastName: 'DeUsuario',
  email: 'email.nome@usuario.com',
  password: 'senhasupersecreta',
  role: 'USER'
}

// simulamos array de usuários contnedo apenas um
loadDatabase.mockResolvedValue([mockUsuario])

it('Encontra usuário quando encontra seu UID', async () => {
  expect.assertions(1)
  const usuario = await getUserByUid('abc-1234')
  expect(usuario).toEqual(mockUsuario)
})

// inicia cenário de erro
it('Dispara um erro caso usuário não seja encontrado', async () => {
  // criamos block try/catch
  try {
    expect.assertions(1)
    //executamos getUserByUid om um uid inexistente
    await getUserByUid('uid-não-existente')
  } catch (err) {
    // adicionamos asserção usando a mensagem de erro
    expect(err.message).toEqual('Não existe usuário com uid informado.')
  }
})

it('Deve conter pelo menos 1 asserção', async () => {
  expect.assertions(1)
  await Promise.resolve(1)
  expect(1).toEqual(1)
})