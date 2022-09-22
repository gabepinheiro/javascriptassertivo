import { AssertionError } from "assert"

export function teste (titulo, funcaoTeste) {
  try {
    funcaoTeste()
    console.log(`✅ ${titulo} passou.`)
  } catch (error) {
    if (error instanceof AssertionError) {
      console.log(`🚨 ${titulo} deu ruim. \n ${error.message}`)
    }
  }
}