class Form{

constructor(){

this.input = createInput("Name");

this.button = createButton("PLAY");

this.greeting = createButton("PLAY");

}

hide(){

this.input.hide();
this.button.hide();
this.greeting.hide();

}

display(){

var Title = createElement("h1");
Title.html("Multiplayer Car Racing");
Title.position(520,125);

this.input.position(520,300);

this.button.position(800,300);

this.button.mousePressed(function(){

this.input.hide();

this.button.hide();

player.name = this.input.value();

PlayerCount += 1;

player.index = PlayerCount;

player.update();
player.updateCount(PlayerCount);

greeting.html(" HI " +  player.name);
greeting.position(620,300);

});


}

}
