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



  var game = {
    board: Array(9),
    player: 0,
    _tokens: { 0: "x", 1: "o" },
    token: function() {
      return this._tokens[this.player];
    }
  }
  function clickhandler(e) {
    var id = e.target.id;
    if (game.board[id] === undefined) {
      game.board[id] = game.player;
      update_board(e);
      game.player = (game.player+1) % 2;
    }
  }

  function update_board(e) {
    token = game.token();
    $(e.target).addClass("x").append("<p>"+token+"</p>");
  }




  $('table').on('click', clickhandler)



  // function boo(e) {
  //   var token = "x";
  //   var cell = $(e.target)
  //   cell.addClass(token);
  //   cell.append("<p>"+token+"</p>")
  // }
  // $('table').on('click', boo)






});
