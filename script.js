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
  function Game() {
    this.board   = Array(9);
    this.player  = 0;
    this._tokens = { 0: "x", 1: "o" };
  }
  Game.prototype.token = function () {
    return this._tokens[this.player];
  }
  Game.prototype.clickhandler = function (e) {
    var id = e.target.id;
    if (game.board[id] === undefined) {
      game.board[id] = game.player;
      game.update_board(e);
      game.player = (game.player+1) % 2;
    }
  }
  Game.prototype.update_board = function (e) {
    token = game.token();
    $(e.target).addClass("x").append("<p>"+token+"</p>");
  }

  var game = new Game;
  $('table').on('click', game.clickhandler)







});
