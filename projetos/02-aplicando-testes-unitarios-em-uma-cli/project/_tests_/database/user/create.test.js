import { createUser } from '../../../src/database/user/create.js'
import * as file from '../../../src/database/file.js'
import path from '../../../src/database/path.js'

import ROLES from '../../../src/constants/roles.js'

jest.mock('../../../src/database/file.js')
jest.mock('../../../src/database/path.js')

// const spies = {
//   load: jest.spyOn(file, 'loadDatabase'),
//   save: jest.spyOn(file, 'saveDatabase')
// }

const usuario = {
  email: 'qualquer@email.com',
  password: 'senha1234',
  userName: 'usuarioQualquer',
  name: 'Usuário',
  lastName: 'Qualquer'
}

afterEach(() => {
  // usando jest.clearAllMocks para facilitar ao invés de limpar cada uma das funções
  jest.clearAllMocks()
})

beforeEach(() => {
  file.loadDatabase.mockResolvedValueOnce([])
})

afterAll(() => {
  jest.restoreAllMocks()
})

it('Cria usuário corretamente', async () => {
  // file.loadDatabase.mockImplementation(() => Promise.resolve([]))
  file.loadDatabase.mockResolvedValueOnce([])

  const user = await createUser(usuario)

  // asserções verificando se as funções foram chamadas
  expect(file.loadDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledWith([user])

  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.USER
  })
})

it('Deve criar um usuário corretamente com role ADMIN', async () => {
  file.loadDatabase.mockResolvedValueOnce([])

  const user = await createUser({ ...usuario, role: ROLES.ADMIN })

  expect(file.loadDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledTimes(1)
  expect(file.saveDatabase).toHaveBeenCalledWith([user])

  expect(user).toEqual({
    ...usuario,
    uid: expect.any(String),
    role: ROLES.ADMIN
  })
})

