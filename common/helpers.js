var BOARD_GAMES = BOARD_GAMES || {};

BOARD_GAMES.helpers = {

}

HTMLCollection.prototype.each = function(funk){
  for(var i = 0; i <= this.length-1; i++){
    funk.call(this, this[i]);
	}
}