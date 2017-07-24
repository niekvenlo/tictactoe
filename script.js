'use-strict';

 $(function() {

  // Helper methods
  function rand(n) {
    return Math.floor(Math.random()*n);
  }

  function puts(obj) {
    console.log(obj);
  }

  function p(obj, convert=true) {
    var msg = (convert) ? obj.toString() : obj;
    console.log(msg);
  }

  function round(number) {
    return Math.round(number);
  }

  //Tic tac toe
  class Game {
    constructor() {
      this.board = Array(9);
      this.player = 0;
      this._tokens = { 0: "x", 1: "o" };
      $("table").on("click", this.clickhandler);
      $("table").append("<div id=next></div>");
      setTimeout(this.next,100);
    }
    get token() {
      return game._tokens[this.player];
    }
    clickhandler(e) {
      var id = e.target.id;
      if (game.board[id] === undefined && id.match(/\d/)) {
        game.board[id] = game.player;
        game.update_board(e);
        game.player = (game.player+1) % 2;
      }
    }
    update_board(e) {
      var token = this.token;
      $(e.target).addClass(token).append("<p>"+token+"</p>");
    }
    next() {
      var pos = $("table")[0].getBoundingClientRect();
      $("#next").css("left", pos.right+"px");
      $("#next").css("top", pos.top+"px");
      puts(left);
    }
  }

  var game = new Game;








});
