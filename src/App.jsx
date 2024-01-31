import './App.css'
import { useState } from 'react'


function App() {

  const [nome, setNome] = useState('')
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [resultado, setResultado] = useState('')
 

  function handleSubimit(e){
    e.preventDefault() 
    const valorIMC = (peso/ (altura * altura)).toFixed(2)
       
    setResultado(valorIMC)
  }

  return (
    <main className='container'>
      <div className='box'>
          <h1>Calculadora IMC</h1>

          <form 
            className='form'
            onSubmit={handleSubimit} 
          >
            <div className='entrada'>
              <input 
                value={nome}
                className='entradaNome' 
                placeholder='Digite seu Nome'
                type='text'
                onChange={(e)=>{setNome(e.target.value)}}  
              ></input>
            </div>
            
            <div className='entrada'>
              <input 
                placeholder='Peso (Kg)'
                value={peso}
                className='entradaPeso' 
                type='Number'
                onChange={(e)=>{setPeso(e.target.value)}}
              />
            </div>

            <div className='entrada'>
              <input 
                value={altura}
                className='entradaPeso'
                placeholder='Altura (m)' 
                type='Number'
                onChange={(e)=>{setAltura(e.target.value)}}
              />
            </div>

            <button type='submit'className='btn'>Calcular</button>
            
            {resultado && <p>{nome}, seu IMC é {resultado}</p>}
          </form>
      </div>
    </main>
  )
}

export default App
