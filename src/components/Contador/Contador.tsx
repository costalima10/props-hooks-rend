import { useState } from 'react'
import './Contador.css'

function Contador() {
//useState= Cria uma variavel de estado
const [numero, setnNumero] = useState(0)

function somaMaisUm(){
  setnNumero(numero + 1)
}
  return (
    <div className="container">
        <p>O valor é: {numero}</p>
        <button onClick={somaMaisUm}>Adicionar +1</button>
    </div>
  )
}

export default Contador