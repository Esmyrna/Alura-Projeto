 import React from 'react'
 
 const Array = () => {

  const tarefas = [{
    tarefa: "Javascript",
    tempo: "01:00:00"
  },
  {
    tarefa: "Typescript",
    tempo: "02:00:00"
  }
    
  ]
   return (
     <>
     <ul>
     {tarefas.map((item, index) => (
        <div key={index}>
            <p>{item.tarefa}</p>
            <h2>{item.tempo}</h2>
        </div>
       
))}
     </ul>
      
     </>
   )
 }
 
 export default Array