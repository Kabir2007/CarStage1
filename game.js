class Game{

constructor(){



}

getState(){

var gamestateRef = database.ref("Gamestate")

gamestateRef.on("value",function(data){

    Gamestate = data.val();
    
})

}

update(state){
    
    database.ref('/').update({

        Gamestate : state
        
    });

}

start(){

if(Gamestate === 0){
    
    player = new Player();
    player.getCount();
    form = new Form();
    form.display();

}    

}

play(){

form.hide();
textSize(25);
text("Game is Starting" , 300 , 50 );

Player.getPlayerInfo();

if(allPlayers !== undefined){

var displayPosition = 200

for(var plr in allPlayers){

if(plr === "player" + player.index)

fill("red");

else

fill("black");

displayPosition += 50;

textSize(15);
text(allPlayers[plr].name + " : " + allPLayers[plr].distance , 50 , displayPosition)

}

}

if(keyIsDown(UP_ARROW) && player.index !== null){

player.distance += 50;
player.update();

}

}

}