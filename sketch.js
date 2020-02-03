



var gameState = 0;
var playerCount = 0;
var database;
var form;
var player;
var game;
var canvas1, bgimage;

function setup(){
  canvas1 = createCanvas(windowWidth, windowHeight);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
  
}

function draw(){

}