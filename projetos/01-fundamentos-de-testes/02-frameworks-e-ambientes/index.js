import { teste } from "./mini-framework.js"
import { verifiqueQue } from "./mini-framework-com-assercoes.js"

const somaHorasExtras = (salario, horasExtras) => salario + horasExtras

const calculaDesconto = (salario, descontos) => salario - descontos 

teste('somaHorasExtras', () => {
  const esperado = 10
  const retornado = somaHorasExtras(5, 5)

  verifiqueQue(esperado).ehExatamenteIgualA(retornado)
})

teste('calculaDesconto', () => {
  const esperado = 5
  const retornado = calculaDesconto(10, 15)

  verifiqueQue(esperado).ehExatamenteIgualA(retornado)
})