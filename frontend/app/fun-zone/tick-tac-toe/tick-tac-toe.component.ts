import { Component } from '@angular/core';

@Component({
  selector: 'app-tick-tac-toe',
  templateUrl: './tick-tac-toe.component.html',
  styleUrls: ['./tick-tac-toe.component.scss']
})
export class TickTacToeComponent {
  // Game board → 9 empty squares at the start
  board: (string | null)[] = Array(9).fill(null);
  // The player whose turn it is — starts with "X"
  currentPlayer: 'X' | 'O' = 'X';

  // Who won? Null means no one yet
  winner: string | null = null;

  // Total moves played
  moves = 0;


  playSquare(index: number) {
    if (this.board[index] || this.winner) return; // ignore if taken or game ended

    // Mark the square with X or O
    this.board[index] = this.currentPlayer;
    this.moves++;

    // Check if someone won
    if (this.checkWinner()) {
      this.winner = this.currentPlayer;
      return;
    }

    // If all 9 moves are done → Draw
    if (this.moves === 9) {
      this.winner = 'Draw';
      return;
    }

    // Switch player
    this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
  }

  getCellIndex(row: number, col: number) {
    return row * 3 + col;
  }

  // Check if current player won
  checkWinner(): boolean {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6]           // diagonals
    ];

    return winPatterns.some(([a, b, c]) =>
      this.board[a] &&
      this.board[a] === this.board[b] &&
      this.board[a] === this.board[c]
    );
  }

  resetGame() {
    this.board = Array(9).fill(null);
    this.currentPlayer = 'X';
    this.winner = null;
    this.moves = 0;
  }

}
