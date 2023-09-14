import Square from "./Square.jsx";
import {motion} from "framer-motion"
import confetti from "canvas-confetti";

const LINES = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const Board = ({xIsNext, squares, onPlay}) => {
    const winner = calculateWinner(squares);
    const handleClick = (i) => {
        if (squares[i] || winner) {
            return;
        }
        const nextSquares = squares.slice()
        if (xIsNext) {
            nextSquares[i] = 'X'
        } else {
            nextSquares[i] = 'O'
        }
        onPlay(nextSquares)
    }

    return (
        <div className="card">
            { winner ?
                <motion.div
                    style={{maxWidth: 250}}
                    initial={{scale: 0}}
                    animate={{rotate: 360, scale: 2}}
                    transition={{
                        type: "spring",
                        stiffness: 100,
                        damping: 20
                    }}
                >
                    <h3>
                        {winner != null ? `Winner:  ${winner}` : `Next Player:  ${xIsNext ? "X" : "O"}`}
                    </h3>
                </motion.div>
                :

                <h3 className="">
                    {winner != null ? `Winner:  ${winner}` : `Next Player:  ${xIsNext ? "X" : "O"}`}
                </h3>
            }

            <div className="board-row">
                <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
                <Square value={squares[1]} classs='square-center' onSquareClick={() => handleClick(1)}/>
                <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
            </div>
            <div className="board-row row-center">
                <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
                <Square value={squares[4]} classs='square-center' onSquareClick={() => handleClick(4)}/>
                <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
                <Square value={squares[7]} classs='square-center' onSquareClick={() => handleClick(7)}/>
                <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
            </div>
        </div>
    );
};

const calculateWinner = (squares) => {
    for (const [a, b, c] of LINES) {
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            confetti({
                angle: 40,
                spread: 100,
                origin: {x: 0}
            });
            confetti({
                angle: 150,
                spread: 100,
                origin: {x: 1}
            });
            return squares[a]
        }
    }
    return null
}

export default Board;