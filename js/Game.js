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

  async start(){
    if(gameState === 0){
      player = new Player();
      var playerCountRef = await database.ref('playerCount').once("value");
      if(playerCountRef.exists()){
        playerCount = playerCountRef.val();
        player.getCount();
      }
      form = new Form()
      form.display();

      bgg = createSprite(700,350,150,550)
    bgg.addImage(bggimg)
    bgg.scale = 2.5

    soldire1 = createSprite(550,700,10,10)
    soldire1.addImage(solimg)
    soldire1.scale = 0.7
    soldire2 = createSprite(750,720,10,10)
    soldire2.addImage(solimg2)
    soldire2.scale = 0.6
    
    opponent = createSprite(600,450,20,20)
    opponent.addImage(opponentimg)
    opponent.scale = 0.5
    torget = createSprite(20,450,20,20)
    torget.addImage(torgetimg)
    torget.scale = 0.2
    
    box = createSprite(200,450,20,20)
    box.addImage(boximg)
    box.scale = 0.9

    soldires = [soldire2,soldire1]

    }
  }

  play(){
    form.hide();
    
    var index = 0;

    Player.getPlayerInfo();

    if(allPlayers !== undefined){
      var index = 0
      var x=0
      var y;

      var display_position = 130;
      for(var plr in allPlayers){
        index = index+1
        x = x+200
        x = displayHeight - allPlayers[plr].distance
        torget.x =  soldires[index-1].x -20
        
        soldires[index-1].x = x;
       
        
        
        }
       

    }
   
    if(frameCount% 40 === 0){
      opponent = createSprite(random(100, 1000), 500, 100, 100);
      opponent.velocityX = 6;
      opponent.addImage(opponentimg);
      opponent.scale = 0.5
      var rand = Math.round(random(1,5));
      opponentG.add(opponent);
    }
    if(keyIsDown(LEFT_ARROW) && player.index !== null){
      player.distance +=10
      player.update();
  }
  if(keyIsDown(RIGHT_ARROW) && player.index !== null){
    player.distance -=10
    player.update();
}
if(keyWentUp("space")){
    bullet = createSprite(500,700,10,10)
    bullet.addImage(bulletimg)
    bullet.scale = 0.2
    bullet.x = soldires[index-1]

}
 
  
   drawSprites();
  }
  
 

  
}
