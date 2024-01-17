import { useEffect, useState } from 'react'
import './Task.css'

function Task() {
  const[completo, setCompleto] = useState(false) //bolean
  const [tarefa, setTarefa] = useState('') //string

  //função a ser disparada / um gatilho a ser analisado
  useEffect(() => {

    if(completo == true){
    setTarefa("Tarefa Concluida")
  }
  }, [completo])
  /*
  function () {} === () => {}
  */

  return (
    <div className="container">
        <h1>Tarefa</h1>
        <h3>Status da Tarefa: { tarefa }</h3>
        <button onClick={()=>{setCompleto(true)}}>Conclua a Tarefa</button>
    </div>
  )
}

export default Task