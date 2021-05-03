class Game{
    constructor(){

    }

    getState(){
        var gameStateInfo = database.ref('gameState');
        gameStateInfo.on("value",function(data){
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
    
    form = new Form();
    form.display();
}

    dog1 = createSprite(575,600);
    dog1.addImage(dog1Image);
    dog2 = createSprite(725,575);
    dog2.addImage(dog2Image);
    dogs = [dog1,dog2];
}

    play(){
        form.hide();
        Player.getPlayerInfo();
        if(allPlayers !== undefined){
            var index = 0;

            for(var plr in allPlayers){
                index = index + 1;
            }

            if((keyIsDown(UP_ARROW)||keyIsDown("W"))&&player.index !== null){
                player.distance += 5;
                player.update();
            }
        }
    }
    
}