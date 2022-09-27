import logger from '../../src/utils/logger.js'

const spyLog = jest.spyOn(console, 'log').mockImplementation()
const spyLogError = jest.spyOn(console, 'error').mockImplementation()

describe('Logger', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('Funções de logging: log', () => {
    // chamamos a função de log normal
    logger.log('teste')
    
    // verificamos se o spy foi chamado
    expect(spyLog).toHaveBeenCalledTimes(1)
  })

  it('Funções de logging: success', () => {
    logger.success('teste success')

    expect(spyLog).toHaveBeenCalledTimes(1)
  })

  it('Funções de logging: error', () => {
    logger.error('teste error')

    expect(spyLogError).toHaveBeenCalledTimes(1)
  })
})
