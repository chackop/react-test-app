import React, { useState } from "react";
import ReactDOM from "react-dom";

const rowStyle = {
  display: "flex",
};

const squareStyle = {
  width: "60px",
  height: "60px",
  backgroundColor: "#ddd",
  margin: "4px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  fontSize: "20px",
  color: "white",
};

const boardStyle = {
  backgroundColor: "#eee",
  width: "208px",
  alignItems: "center",
  justifyContent: "center",
  display: "flex",
  flexDirection: "column",
  border: "3px #eee solid",
};

const containerStyle = {
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
};

const instructionsStyle = {
  marginTop: "5px",
  marginBottom: "5px",
  fontWeight: "bold",
  fontSize: "16px",
};

const buttonStyle = {
  marginTop: "15px",
  marginBottom: "16px",
  width: "80px",
  height: "40px",
  backgroundColor: "#8acaca",
  color: "white",
  fontSize: "16px",
};

class Square extends React.Component {
  render() {
    return (
      <div className="square" style={squareStyle} onClick={this.props.onClick}>
        {this.props.value}
      </div>
    );
  }
}

class Board extends React.Component {
  render() {
    return (
      <div style={containerStyle} className="gameBoard">
        <div
          className={
            this.props.status && this.props.status.includes("Winner")
              ? "winner"
              : "status"
          }
          style={instructionsStyle}
        >
          {this.props.status}
        </div>
        <button style={buttonStyle} onClick={this.props.reset}>
          Reset
        </button>
        <div style={boardStyle}>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[0]}
              onClick={() => this.props.onClick(0)}
            />
            <Square
              value={this.props.squares[1]}
              onClick={() => this.props.onClick(1)}
            />
            <Square
              value={this.props.squares[2]}
              onClick={() => this.props.onClick(2)}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[3]}
              onClick={() => this.props.onClick(3)}
            />
            <Square
              value={this.props.squares[4]}
              onClick={() => this.props.onClick(4)}
            />
            <Square
              value={this.props.squares[5]}
              onClick={() => this.props.onClick(5)}
            />
          </div>
          <div className="board-row" style={rowStyle}>
            <Square
              value={this.props.squares[6]}
              onClick={() => this.props.onClick(6)}
            />
            <Square
              value={this.props.squares[7]}
              onClick={() => this.props.onClick(7)}
            />
            <Square
              value={this.props.squares[8]}
              onClick={() => this.props.onClick(8)}
            />
          </div>
        </div>
      </div>
    );
  }
}

class Game extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [
        {
          squares: Array(9).fill(null),
        },
      ],
      stepNumber: 0,
      xIsNext: true,
    };
  }

  handleClick(i) {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? "X" : "O";
    this.setState({
      history: history.concat([
        {
          squares: squares,
        },
      ]),
      stepNumber: history.length,
      xIsNext: !this.state.xIsNext,
    });
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const winner = calculateWinner(current.squares);

    let status;
    if (winner) {
      status = "Winner: " + winner;
    } else {
      status = "Next player: " + (this.state.xIsNext ? "X" : "O");
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            reset={() =>
              this.setState({
                stepNumber: 0,
                xIsNext: true,
              })
            }
            status={status}
            squares={current.squares}
            onClick={(i) => this.handleClick(i)}
          />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Game />, document.getElementById("root"));

function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}
