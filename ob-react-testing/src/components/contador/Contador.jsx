import React, {useState} from 'react';


const Contador = () => {
  const [count, setCount] = useState(0);

  const aumentar = () => {
    setCount(count+1)
  }
  const disminuir = () => {
    setCount(count-1)
  }
  const resetear = () => {
    setCount(0)
  }
  return (
		<div>
			<h1>Testeando un contador</h1>
			<p>
				Contador: <span aria-label='contador'>{count}</span>
			</p>
			<button
				onClick={aumentar}
				aria-label='aumentar'
			>
				Aumentar
			</button>
			<button
				onClick={disminuir}
				aria-label='disminuir'
			>
				Disminuir
			</button>
			<button
				onClick={resetear}
				aria-label='resetear'
			>
				Resetear
			</button>
		</div>
	);
}

export default Contador;
