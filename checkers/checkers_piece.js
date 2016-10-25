var BOARD_GAMES = BOARD_GAMES || {};

BOARD_GAMES.CheckersPiece = function(player_name, checkers_board){
  this.player_name = player_name;
  this.checkers_board = checkers_board;
}

BOARD_GAMES.CheckersPiece.prototype = {
  getOwner: function(){
    return this.player_name;
  },
  getBoard: function(){
    return this.checkers_board;
  },
  validateMove: function(start_column, start_row, end_column, end_row){
    var board = this.getBoard();

    var column_delta = board.getColumnDelta(start_column, end_column);
    var row_delta    = board.getRowDelta(start_row, end_row);

    var are_movements_valid  = this.validatePieceMovement(column_delta, row_delta);

    if(!are_movements_valid){
      return false;
    }

    var destination_square = board.getSquareContents(end_column, end_row);

    if(destination_square != null){
      // The destination that the piece wants to move to already
      // has another piece in it so the move is invalid.
      return false;
    }

    return true;
  },
  validatePieceMovement: function(column_delta, row_delta){
    // VALIDATE THE MOVEMENT OF THE PIECE
    // Check that the piece movements were one of the two valid
    // ways a checkers piece can move.  1) a single, diagonal hop
    // and 2) a double, diagonal hop done when capturing another
    // piece.
    if(column_delta == 1 && row_delta == 1){
      // Do nothing, just a single hop.
    }else if(column_delta == 2 && row_delta == 2){
      // Captruing movement... check below that the square
      // that got hopped had the opposing players piece
      // in it.
      var square_that_was_hopped = this.checkers_board.getHoppedSquare(start_column, start_row, end_column, end_row);
      if(square_that_was_hopped == null || square_that_was_hopped.getOwner() == this.getOwner){
        return false;
      }
    }else{
      // The starting and ending square locations are invalid
      // for the way a checkers piece can move
      return false;
    }

    return true;
  }
}