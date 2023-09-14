import './App.css'
import Board from "./components/Board.jsx";
import {useState} from "react";

function App() {
    const [xIsNext, setXIsNext] = useState(true)
    const [history, setHistory] = useState([Array(9).fill(null)])
    const [currentMove, setCurrentMove] = useState(0);
    const currentSquares = history[currentMove];

    const handlePlay = (nextSquares) => {
        const nextHistory = [...history.slice(0, currentMove + 1), nextSquares]
        setHistory(nextHistory)
        setCurrentMove(nextHistory.length - 1)
        setXIsNext(!xIsNext)
    }

    const jumpTo = (nextMove) => {
        setCurrentMove(nextMove)
        setXIsNext(nextMove % 2 === 0)
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go mov: ' + move;
        } else {
            description = 'Restart';
        }
        return (
            <button key={move} className={`${move === currentMove && 'active'}`} onClick={() => jumpTo(move)}>{description}</button>
        );
    });

    return (
        <div className='game'>
            <div className='game-header'>
                <img className='logo' src={'/icon.png'} alt='logo'/> <h1>Tic Tac Toe</h1>
            </div>
            <div className='game-content'>
                <div className='game-board'>
                    <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
                </div>
                <div className='game-info'>
                    <span className="read-the-docs badge">
                        {moves}
                    </span>
                </div>

            </div>
            <div className="game-header">
                By +++Cart3rroR+++
            </div>
        </div>
    )
}

export default App
