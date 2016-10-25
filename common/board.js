var BOARD_GAMES = BOARD_GAMES || {};

// LAYOUT OF BOARD
//   a b c d e f g h
// 1|_|_|_|_|_|_|_|_|
// 2|_|_|_|_|_|_|_|_|
// 3|_|_|_|_|_|_|_|_|
// 4|_|_|_|_|_|_|_|_|
// 5|_|_|_|_|_|_|_|_|
// 6|_|_|_|_|_|_|_|_|
// 7|_|_|_|_|_|_|_|_|
// 8|_|_|_|_|_|_|_|_|

BOARD_GAMES.Board = function(){
  this.board = this.getNewBoard();
}

BOARD_GAMES.Board.prototype = {
  placePiece: function(column, row, piece){
    //console.log('column : '+column+' row : '+row);
    this.board[column][row] = piece;
  },
  getSquareContents: function(column, row){
    return this.board[column][row];
  },
  getNewBoard: function(){
    var board = {}

    var columns_string = 'abcdefgh';
    var total_rows = 8;

    for(var c = 0; c <= columns_string.length-1; c++){
      // intialize column in the board hash
      var current_col = board[columns_string.charAt(c)] = {};
      console.log(current_col)
      var current_row = 1;
      while(current_row <= total_rows){
        current_col[current_row] = null;
        current_row++;
      }
    }

    return board;
  },
  getColumnDelta: function(col_1, col_2){
    var columns_to_int_map = {'a':1, 'b':2, 'c':3, 'd':4, 'e':5, 'f':6, 'g':7, 'h':8};
    var col_1_integer_value = columns_to_int_map[col_1];
    var col_2_integer_value = columns_to_int_map[col_2];
    return this.calculateDelta(col_1_integer_value, col_2_integer_value);
  },
  getRowDelta: function(row_1, row_2){
    return this.calculateDelta(row_1, row_2);
  },
  calculateDelta: function(num_1, num_2){
    return Math.abs(num_1 - num_2);
  }
}

