var form,game,player;
var database,gamestate,playercount;

function setup(){
createCanvas(400,400)


database = firebase.database();
game = new Game();
game.getState();
game.start();

}
function draw(){
  background("pink")
}
