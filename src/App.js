import React, { useState } from 'react'
import Square from './components/Square'
import './App.css'

const App = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [player1, setPlayer1] = useState("❌")
  const [xMoves, setXMoves] = useState([])
  const [oMoves, setOMoves] = useState([])

  const winningCombos = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]

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
      if (player1 === "❌") {
        xMoves.push(squares[boxClick])
      } else {
        oMoves.push(squares[boxClick])
      }
      setPlayer1(player1 === "❌" ? "⭕️" : "❌")
      console.log("This is the X moves array;", xMoves)
      console.log("This is the O moves array;", oMoves)

      //This is just console.log for troubleshooting
      console.log(squares[boxClick])
    }
    // Commented out below line 30-35, same logic as ternary operator above

    //   else if (squares[boxClick] !== player1) {
    //     //update clicked square to playerO
    //     squares[boxClick] = "⭕️"
    //     //update default value
    //     setPlayer1("⭕️")
    //   }
  }

  const checkWinner = (arrOfMoves, arrOfWins) => {
    for (let i = 0; i < arrOfMoves.length; i++) {
      for (let j = 0; j < arrOfWins.length; j++) {
        if (arrOfMoves[i] === )
      }
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
              handleGamePlay={handleGamePlay} />
          )
        })}
      </div>
    </>
  )
}

export default App