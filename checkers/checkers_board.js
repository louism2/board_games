BOARD_GAMES = BOARD_GAMES || {};


BOARD_GAMES.CheckersBoard = function(){
  // Call the board constructor if needed
  BOARD_GAMES.Board.apply(this);

  this.pieceThatWasHopped = function(start_column, start_row, end_column, end_row){

  }
}

BOARD_GAMES.CheckersBoard.prototype = BOARD_GAMES.Board.prototype;