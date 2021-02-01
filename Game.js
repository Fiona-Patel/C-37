class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
  play(){
    form.hide();
    text("game start",120,100);
    Player.getPlayerInfo();
    if(allPlayer!==undefined){
    var displayPosition = 130;
    for(var plr in allPlayer){

    
    if(plr==="player"+player.index)
    fill("red");  
    else
    fill("black");

    displayPosition = displayPosition+20;
    textSize(15); 
    text(allPlayer[plr].name + ": " + allPlayer[plr].distance, 120,display_position)
    }
  }
  if(keyDown(UP_ARROW)&& player.index!==null){
    player.distance = player.distance+60,
    player.update();


  }
  }
}
