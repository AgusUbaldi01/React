import { useState } from 'react'

function App() {
  
// Estados
 
 const [num1, setNum1] = useState(0);
 const [num2, setNum2] = useState(0);
 const [resultado, setResultado] = useState(0);

 //Función que hga las cuentas
 // handle es un manejador
 const handleOperation = (operation) => {
  if(operation === "dividir") {
    let auxiliar;
    if (num1 < num2) {
      auxiliar = num1;
      setNum2(num1);
      setNum1(auxiliar);  
    }
  }
  switch (operation) {
    case "suma": 
      setResultado(num1 + num2)
      break;
      case "resta": 
      setResultado(num1 - num2)
      break;
      case "multiplicacion": 
      setResultado(num1 * num2)
      break;
      case "dividir": 
      setResultado(num1 / num2)
      break;
      default:
        setResultado(0);
        break;
  }
 };

  return (
   <div>
    <label>Numero 1</label>
    <input type="number"  onChange={(evento) => setNum1(Number(evento.target.value)) }/>

    <label>Numero 2</label>
    <input type="number"  onChange={(evento) => setNum2(Number(evento.target.value)) }/>
   
   <button onClick={() => handleOperation("suma")}>Suma</button>
   <button onClick={() => handleOperation("resta")}>Retsa</button>
   <button onClick={() => handleOperation("multiplicacion")}>Multiplicar</button>
   <button onClick={() => handleOperation("dividir")}>Dividir</button>

    <div>  
      <label >Resultado</label>
      <br />
      <span>{resultado}</span>
    </div>
  </div>



  )
}

export default App;

