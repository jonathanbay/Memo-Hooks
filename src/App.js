import React, { useEffect, useRef, useState } from 'react';

const App = () => {

  // 1. Les useState (état)
  const [myNumber, setMyNumber] = useState(0);

  // 2. Les useEffect(fonction fléchée, [callback])
  useEffect(() => {
    console.log("le nombre à changé");
  }, [myNumber])

  // 3. useRef
  const selectedNumber = useRef();


  return (
    <div className='app'>
      <p>{myNumber}</p>

      <button onClick={() => setMyNumber(Number(myNumber) + 1)}>incrémenter + 1</button>

      <label htmlFor="">Numero de depart</label>
      <input 
      type="number"
      defaultValue={0}
      ref={selectedNumber}
      onChange={() => setMyNumber(selectedNumber.current.value)}
      />

    </div>
  );
};

export default App;