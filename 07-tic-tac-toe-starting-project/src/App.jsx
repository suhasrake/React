import { useState } from "react"
import Players from "./Components/Players"
import GameBoard from "./Components/GameBoard"


function App() {

  const [playerState, setPlayerState]=useState('X');

  function handlePlayerState(){
    setPlayerState((currPlayerState)=>currPlayerState==='X'?'O':'X');
  }

  return (
    <div   id="game-container">
      <ol id="players" className="highlight-player">
        <Players name="Player 1" symbol="X" isActive={playerState==='X'}></Players>
        <Players name="Player 2" symbol="O" isActive={playerState==='O'}></Players>
      </ol>
      <GameBoard playerItemSelected={handlePlayerState} playerSymbol={playerState}/>

    </div>
  )
}

export default App
