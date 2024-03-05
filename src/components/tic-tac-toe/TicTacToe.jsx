import PropTypes from "prop-types";
import "./tic-tac-toe.css";
import { useEffect, useState } from "react";

const Square = ({ value, onClick }) => {
  return (
    <button onClick={onClick} className="square">
      {value}
    </button>
  );
};
Square.propTypes = {
  value: PropTypes.string,
  onClick: PropTypes.func,
};

function TicTacToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [xIsNext, setXIsNext] = useState(true);
  const [winner, setWinner] = useState(null);

  const getWinner = (squares) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (i) => {
    const newSquares = [...squares];
    if (getWinner(newSquares) || newSquares[i]) return;
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const resetGame = () => {
    setSquares(Array(9).fill(""));
    setXIsNext(true);
    setWinner(null);
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((sq) => sq !== "")) {
      setWinner("Tie");
    } else if (getWinner(squares)) {
      setWinner(`${getWinner(squares)} wins! Restart Game!`);
    } else {
      setWinner(`It is ${xIsNext ? "X's" : "O's"} turn`);
    }
  }, [squares, xIsNext]);

  console.log(squares);
  return (
    <div className="game-container">
      <div className="row">
        <Square value={squares[0]} onClick={() => handleClick(0)} />
        <Square value={squares[1]} onClick={() => handleClick(1)} />
        <Square value={squares[2]} onClick={() => handleClick(2)} />
      </div>
      <div className="row">
        <Square value={squares[3]} onClick={() => handleClick(3)} />
        <Square value={squares[4]} onClick={() => handleClick(4)} />
        <Square value={squares[5]} onClick={() => handleClick(5)} />
      </div>
      <div className="row">
        <Square value={squares[6]} onClick={() => handleClick(6)} />
        <Square value={squares[7]} onClick={() => handleClick(7)} />
        <Square value={squares[8]} onClick={() => handleClick(8)} />
      </div>
      <h1 className="winner">{winner}</h1>
      <button onClick={resetGame}>Restart</button>
    </div>
  );
}

export default TicTacToe;
