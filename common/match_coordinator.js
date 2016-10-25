var BOARD_GAMES = BOARD_GAMES || {};

BOARD_GAMES.MatchCoordinator = function(match_obj, board_obj, board_div, message_div, player_color_map){
  this.match = match_obj
  this.board = board_obj;
  this.board_div = board_div;
  this.message_div = message_space;
  this.player_color_map = player_color_map;
}

BOARD_GAMES.MatchCoordinator.prototype = {
  getBoard: function(){
    return this.board;
  },
  getMatch: function(){
    return this.match;
  },
  startMatch: function(){
      var current_player = this.match.current_player;
      this.drawBoard(current_player);
      this.message_div.textContent = 'Current Move: '+current_player;
      this.listenForMove();
      this.listenForMoveSubmit();
  },
  drawBoard: function(player){
    var board = this.board.board;
    var column_keys = Object.keys(board);
    var num_of_columns = column_keys.length;

    // LOOP THROUGH THE BOARD'S COLUMNS
    for(var column_index = 1; column_index <= num_of_columns; column_index++){
      // Inside of the board div are 8 columns, each of which
      // is represented in the UI as a span element with a
      // class name of "column."
      var column_wrapper = document.createElement('span');
      column_wrapper.className = 'column';

      var current_column_letter = column_keys[column_index-1];
      var current_column_obj = board[current_column_letter];
      var row_keys = Object.keys(current_column_obj);
      var num_of_rows = row_keys.length;


      // LOOP THROUGH THE ROWS IN THE COLUMN
      for(var row_index = 1; row_index <= num_of_rows; row_index++){
        var current_row_number = row_keys[row_index-1]
        var piece = current_column_obj[row_index];

        var style = '';
        var player_name = '';

        if(piece){
          player_name = piece.player_name;
          color = this.player_color_map[player_name];
          style = 'background-color:'+color;
        }
        column_wrapper.innerHTML += '<div class="square"  \
                                       data-column="'+current_column_letter+'"  \
                                       data-row="'+current_row_number+'"  \
                                       style="'+style+'"  \
                                       data-selected="false"  \
                                       data-player_name="'+player_name+'">  \
                                    </div>';
      } // end row loop

      this.board_div.innerHTML += column_wrapper.outerHTML;
    } // end column loop
  }
}