// é importante que cada componente tenha seu arquivo JS, com o mesmo nome e escrito com primeira letra maiuscula
import React from 'react';
import "./global.css";
import Logon from "./pages/Logon"

// um componente no react nada mais é do que uma funçao que returna JSX
function App() {
  /**
  // criação de estados
  let [counter, setCounter] = useState(0);
  // os estados geralmente sao arrays que guardam uma variavel e a função de atualização da variavel no react
  // array = [valor da variavel em si, função de atualização da variavel]

  function increment() {
    setCounter(counter += 1);   

    console.log(counter);
  }
   */

  return (
    // HTML escrito dentro de javascript é chamado de JSX (Javascript XML)
    <div>
      <Logon />
    </div>
  );
}

export default App;
