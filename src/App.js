import './App.css';
import { useState } from 'react';
import DiceBtn from './DiceBtn';

function randomNumber( roll = 20 ) {
  return Math.floor( Math.random() * roll ) + 1
}

function App() {
  const [ numBtns, setNumBtns] = useState( 3 );
  console.log( { numBtns });

  const getInitialValue = () => Array.from(Array( numBtns ));
  const [ result, setResult ] = useState( getInitialValue() );

  console.log( 'State is: ', result );
  
  function onClick(i) {
    const [ ...oldArray ] = result;
    console.log( oldArray );
    const newNumber = randomNumber();
    console.log( newNumber  );
    oldArray.splice( i, 1, newNumber );
    console.log( oldArray );
    setResult( oldArray );
  }

  return (
    <div className="App">
      <header className="App-header">
        <input type="number" onChange={( event ) => {
          setNumBtns(event.target.value);
          setResult( getInitialValue() );
        }}/>
        
        Your result is: {result.map( (roll, i) => {
            return <div key={i}>{roll ? `${roll}` : 'no roll yet'}</div>;
        } )}

        {result.map( ( num, index ) => {
          return (
            <DiceBtn key={index} onClick={ () => onClick( index ) }>
              Button {index + 1}
            </DiceBtn>
          )
        })}

        <br/>
        
        <button onClick={() => setResult( getInitialValue() )}>CLEAR</button>

      </header>
    </div>
  );
}

export default App;
