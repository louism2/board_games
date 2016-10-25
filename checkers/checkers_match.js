var BOARD_GAMES = BOARD_GAMES || {};

BOARD_GAMES.CheckersMatch = function(board, player_1_name, player_2_name){
  this.board = board;
  this.player_1 = player_1_name;
  this.player_2 = player_2_name;
  this.current_player = player_1_name;
  var player_1_pieces = this.createPieces(player_1_name);
  var player_2_pieces = this.createPieces(player_2_name);
  this.placePieces(player_1_pieces, player_2_pieces);
}

BOARD_GAMES.CheckersMatch.prototype = {
  getCurrentPlayer: function(){
    return this.current_player;
  },
  executeMoves: function(moves_queue){


  },
  createPieces: function(player_name){
    var total_pieces = 12;
    var pieces = [];

    for(var current_piece = 1;  current_piece <= total_pieces; current_piece++){
      pieces.push(new BOARD_GAMES.CheckersPiece(player_name, this.board));
    }

    return pieces
  },
  placePieces: function(player_1_pieces, player_2_pieces){
    var front_and_back_columns = ['b','d','f','h'];
    var middle_columns         = ['a','c','e','g'];

    this.setRow(1, player_1_pieces, front_and_back_columns);
    this.setRow(3, player_1_pieces, front_and_back_columns);
    this.setRow(2, player_1_pieces, middle_columns);

    this.setRow(6, player_2_pieces, front_and_back_columns);
    this.setRow(8, player_2_pieces, front_and_back_columns);
    this.setRow(7, player_2_pieces, middle_columns);
  },
  setRow: function(row, pieces, columns_array){
    for(el in columns_array){
      var piece = pieces.pop();
      var column = columns_array[el];
      this.board.placePiece(column, row, piece)
    }
  }

}
