BOARD_GAMES = BOARD_GAMES || {};

BOARD_GAMES.CheckersMatchCoordinator = function(match_obj, board_obj, board_div, message_div, player_color_map){
  // Call prototype constructor
  BOARD_GAMES.MatchCoordinator.apply(this, [match_obj, board_obj, board_div, message_div, player_color_map]);

  this.moves_queue = [];

  this.getMovesQueue = function(){
    return this.moves_queue;
  }

  this.listenForMoveSubmit = function(){
    var self = this;
    var match = this.getMatch();
    var move_submit_button = document.getElementById('submit_move');

    move_submit_button.addEventListener('click', function(e){
      var copy_of_moves_queue = self.moves_queue.slice();

      var are_moves_valid = self.validateMoves(copy_of_moves_queue);

      if(are_moves_valid){
        console.log('moves are valid');
        self.executeMoves();
        self.message_div.textContent('move executed');
        match.match.switchPlayerTurns();
        match.haltMatchDueToWin();
        match.forcePieceCaptureIfAvailable();
      }else{
        console.log('move is invalid');
        // message that the moves are invalid
      }

    });
  }

  this.listenForMove = function(){
    var squares = document.getElementsByClassName('square');
    var self = this;

    squares.each(function(el){
      el.addEventListener('click', function(event){
        self.message_div.textContent = '';
        var square = event.target;

        // If the moves_queue is empty the user is choosing the
        // piece that they wish to move.  Make sure it is actually
        // their piece and present an error message if it isn't.
        if(self.getMovesQueue().length == 0){
          var square_owner = square.dataset.player_name;
          var current_player = self.match.getCurrentPlayer();
          if(square_owner != current_player){
            self.message_div.textContent = "You can't select a piece that isn't yours";
            return;
          }
        }

        if(square.dataset.selected == 'true'){
          // The square that the user clicked had already been selected
          // so we need to unwind the moves_queue back to the element that
          // the user had clicked.
          self.unwindMoves(square);
        }else{
          square.dataset.selected = 'true';
          square.style.borderColor = 'purple';
          self.moves_queue.push(square);
        }
      });
    });
  }

  this.getPieceFromDOM = function(dom_el){
    var col = dom_el.dataset.column;
    var row = dom_el.dataset.row;
    return this.board.getSquareContents(col, row);
  }

  this.validateMoves = function(moves_queue){
    var piece = this.getPieceFromDOM(moves_queue[0]);
    if(!piece){
      // The square that the user chose had no peice
      return false;
    }

    if(piece.getOwner() != this.match.getCurrentPlayer()){
      // The piece that the user chose was not one of their own
      return false;
    }

    for(var x = 0; x <= moves_queue.length-2; x++ ){
      var start_square_column = moves_queue[x].dataset.column;
      var start_square_row    = moves_queue[x].dataset.row;

      var destination_square_column = moves_queue[x+1].dataset.column;
      var destination_square_row    = moves_queue[x+1].dataset.row;

      var is_valid = piece.validateMove(start_square_column, start_square_row, destination_square_column, destination_square_row)

      if(!is_valid){
        return false;
      }
    }

    return true;
  }

  this.executeMoves = function(){
    moves_queue
  }

  this.unwindMoves = function(square){
    var tail_el = this.moves_queue.pop();
    tail_el.dataset.selected = 'false';
    tail_el.style.borderColor = 'green';
    if(tail_el != square){
      // If the tail element is not the square that the user clicked then
      // call this method again and continue removing squares from the queue
      // until you find the one the user clicked.
      this.unwindMoves(square);
    }
  }

}

BOARD_GAMES.CheckersMatchCoordinator.prototype = BOARD_GAMES.MatchCoordinator.prototype;
