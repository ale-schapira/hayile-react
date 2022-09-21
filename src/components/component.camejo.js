import {React , useState } from 'react';

function Camejo() {
    const [contador, setContador] = useState(2000);
    const increase = () => {
      setContador(count => count + 50);
    };
    const decrease = () => {
      setContador(count => count - 50);
    };
    return (
        <div>
            <button onClick={increase}>Boton</button>
            <button onClick={decrease}>Boton</button>
            {contador}
        </div>
    )
}
  
  export default Camejo