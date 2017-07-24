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
      $("table").on("click", this.clickhandler);
      this.target = null;
      this.move();
    }
    get token() {
      var tokens = { 0: "x", 1: "o" };
      return tokens[this.player];
    }
    clickhandler(e) {
      game.target = e.target;
      var id = e.target.id;
      if (game.board[id] === undefined && id.match(/\d/)) {
        game.board[id] = game.player;
        game.lastmove = id;
        game.move(e);
      }
    }
    move(e) {
      var token = this.token;
      if (e) {
        var pos = e.target.getBoundingClientRect();
        $("#next").animate({ left: pos.left, top: pos.top }, 500, game.update_board);
      }
      $("#next").removeClass().addClass(token).html("<p>"+token+"</p>");
    }
    update_board(e) {
      var token = game.token;
      game.player = (game.player+1) % 2;
      $("#next").animate({ left: 400, top: 0 }, 1);
      $("#"+game.target.id).addClass(token).html("<p>"+token+"</p>");
    }
  }

  var game = new Game;








});
