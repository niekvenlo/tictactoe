'use-strict';

 $(function() {

  // Helper methods
  function rand(n) {
    return Math.floor(Math.random()*n);
  }

  function puts(obj) {
    console.log(obj.toString());
  }

  function p(obj, convert=true) {
    var msg = (convert) ? obj.toString() : obj;
    console.log(msg);
  }

  function round(number) {
    return Math.round(number);
  }

  //Tic tac toe
  var counter = 0;
  function boo(e) {
    var token = (counter++ % 2 === 0) ? "x" : "o";
    var cell = $(e.target)
    cell.addClass(token);
    cell.append("<p>"+token+"</p>")
  }

  $('table').on('click', boo)



});
