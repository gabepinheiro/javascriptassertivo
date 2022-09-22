import assert from 'assert'

export function verifiqueQue (valor) {
  const assercoes = {
    ehExatamenteIgualA (esperado) { //criamos a função
      assert.strictEqual(valor, esperado)
    }
  } 

  return assercoes
}