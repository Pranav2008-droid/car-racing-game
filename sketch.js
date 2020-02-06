var canvas, backgroundImage;

var gameState = 0;
var playerCount;

var database;

var form, player, game;

var allPlayers;

function setup(){

    // Your web app's Firebase configuration
    var firebaseConfig = {
      apiKey: "AIzaSyChF62JRjU-qEXSn3W23cQIjIuOEishx6I",
      authDomain: "test-whitehat-ball.firebaseapp.com",
      databaseURL: "https://test-whitehat-ball.firebaseio.com",
      projectId: "test-whitehat-ball",
      storageBucket: "test-whitehat-ball.appspot.com",
      messagingSenderId: "679049809667",
      appId: "1:679049809667:web:ee900396bb2e2b475f2336"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if (playerCount === 4){
    game.update(1);
  }
  if (gameState === 1){
    clear();
    game.play();
  }
}
