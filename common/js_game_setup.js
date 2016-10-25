document.addEventListener( "DOMContentLoaded", runInitializationsScripts, false );

function runInitializationsScripts(){
  var form = document.getElementById('game_form');
  var message_div = document.getElementById('message_space');
  var board_div = document.getElementById('board');

  form.addEventListener('submit', function(e){
    e.preventDefault();
    var game_type = e.target.elements['game_type'].value;
    var player_1_name = e.target.elements['player_1_name'].value;
    var player_1_color = 'red';//e.target.elements['player_1_color'].value;
    var player_2_name = e.target.elements['player_2_name'].value;
    var player_2_color = 'black';//e.target.elements['player_2_color'].value;

    var color_map = {};
    color_map[player_1_name] = player_1_color;
    color_map[player_2_name] = player_2_color;

    var match_coordinator = null;

    if(game_type != undefined){
      if(game_type == 'checkers'){
        var board = new BOARD_GAMES.CheckersBoard();
        var match = new BOARD_GAMES.CheckersMatch(board, player_1_name, player_2_name);
        match_coordinator = new BOARD_GAMES.CheckersMatchCoordinator(match, board, board_div, message_div, color_map);
      }else{

      }
      match_coordinator.startMatch();
    }else{
      message_space.innerHTML = 'choose a game type dummy';
    }
  });

};



