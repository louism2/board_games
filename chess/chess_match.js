class ChessMatch
  
  //// LAYOUT OF BOARD
  //   a b c d e f g h
  // 1|_|_|_|_|_|_|_|_|
  // 2|_|_|_|_|_|_|_|_|
  // 3|_|_|_|_|_|_|_|_|
  // 4|_|_|_|_|_|_|_|_|
  // 5|_|_|_|_|_|_|_|_|
  // 6|_|_|_|_|_|_|_|_|
  // 7|_|_|_|_|_|_|_|_|
  // 8|_|_|_|_|_|_|_|_|
  
  const initial_piece_map = {
                        king:    [ [1,'a'],['g',4] ],
                        queen:   [ ['a',4],['g',5] ],
                        rook:    [ ['a',1],['a',8],['h',1],['h',8] ],
                        bishop:  [ ['a',3],['a',6],['h',3],['h',6] ],
                        knight:  [ ['a',3],['a',6],['h',3],['h',6] ],
                        pawn:    [ 
                                   ['b',1],['b',2],['b',3],['b',4],['b',5],['b',6],['b',7],['b',8],
                                   ['b',1],['b',2],['b',3],['b',4],['b',5],['b',6],['b',7],['b',8]
                                  ]
                      }
  
  attr_reader :board, :player_1, :player_2
  
  def initialize(player_1, player_2)
    @player_1 = player_1
    @player_2 = player_2
    @board = PlayingBoard.new
  end  

  def play_game
    intialize_peices
    start_game
  end
  
  def players
    @teams ||= [team_1, team_2]
  end
  
private  
  
  def initialize_peices
    place_front_rows
    place_back_rows
  end
  
  def place_front_rows
    8.times do |x|
      pawn_1 = Pawn.new
      pawn_2 = Pawn.new
      board.set('b', x, pawn_1)
      board.set('g', x, pawn_2)
    end  
  end
  
  def place_back_rows
    place_rooks
    place_bishops
    place_knights
    place_royalty
  end
  
  def place_rooks
      rook_1 = Rook.new 
      rook_2 = Rook.new
    
      board.set('b', x, rook_1)
      board.set('g', x, rook_2)
  end  
  
  def place_bishops
    
  end
  
  def place_knights
    
  end
  
  def place_royalty
    
  end
  
end