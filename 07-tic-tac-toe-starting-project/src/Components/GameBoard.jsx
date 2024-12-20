import { useState } from "react";

const initialBoardBoxes=[
    [null,null,null],
    [null,null,null],
    [null,null,null]
];

export default function GameBoard({playerItemSelected, playerSymbol}){

    const [gameBoard,setGameBoard]=useState(initialBoardBoxes);

    function handleGameBoard(rowIndex,symbolIndex){
        if(gameBoard[rowIndex][symbolIndex]===null){
            setGameBoard((prevGameBoard)=>{
                const updatedBoard=[...prevGameBoard.map(insideArray=>[...insideArray])];
                updatedBoard[rowIndex][symbolIndex]=playerSymbol;
                return updatedBoard;
            });
            playerItemSelected();
            checkIsGameComplete(rowIndex,symbolIndex);
        }    
    }

    function checkIsGameComplete(rowIndex,colIndex){
        debugger
       for(var i=0;i<=2;i++){
        if(gameBoard[rowIndex][i]===playerSymbol){
            if(i==2){
                alert("Game Complete");
            }
        }
        else{
            break;
        }
       }
       for(var j=0;j<=2;j++){
        if(gameBoard[j][colIndex]===playerSymbol){
            if(i==2){
                alert("Game Complete");
            }
        }
        else{
            break;
        }
       }

    }



    return (
        <ol id="game-board">
        {gameBoard.map((row,rowIndex)=>(
            <li key={rowIndex}>
                <ol>
                {row.map((symbol,symbolIndex)=>(
                <li key={symbolIndex}>
                    <button onClick={()=>handleGameBoard(rowIndex,symbolIndex)}>{symbol}</button>
                </li>
                ))}
                </ol>
            </li>
            ))}
        </ol>);
}