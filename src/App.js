import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player1, setPlayer1] = useState("❌")

  const handleGamePlay = (boxClick) => {
    // let updateMove = [...squares]
    console.log("Is this WORKING???")
    console.log("Square: ", squares)
    //if box at current boxClick is null
    if (squares[boxClick] === null) {
      //update current box to fPlayer
      squares[boxClick] = player1

      //update default squares to new square value
      setSquares(squares)
      //update player by using (ternary operator)
        //reads as (If player1 strictly equals "x", if TRUE, change value to "O", if FALSE, change value to "X") 
      setPlayer1(player1 === "❌" ? "⭕️" : "❌")

      //This is just console.log for troubleshooting
      console.log(squares[boxClick])
    }
    else if (squares[boxClick] !== player1) {
      //update clicked square to playerO
      squares[boxClick] = "⭕️"
      //update default value
      setPlayer1("⭕️")
    }
  }

  return (
    <>
      <h1 className="gameTitle">Tic Tac Toe</h1>
      <div className="ticTacToe-board">
        {squares.map((square, index) => {
          return (
            <Square square={square}
            index={index}
            key={index}
            handleGamePlay={handleGamePlay}/>
            )
          })}
      </div>
    </>
  )
}

export default App