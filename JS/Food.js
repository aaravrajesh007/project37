class Food{
    constructor(){
        this.foodStock=0;;
        this.lastFed;
      this.image=loadImage("images/Milk .png")
    }

    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      });
    }
    
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }

    
      getFoodStock(){
        return this.foodStock;
      }

      updateFoodStock(FS){
        this.foodStock=FS;
      }

      bedroom(){
        background(bedroomimg,550,500);
      }

      washroom(){
        background(washroomimg,550,500);
      }

      garden(){
        background(gardenimg,550,500);
      }

      getFedTime(LF){
        this.lastFed=LF
      }
      display(){
          var x=50;
          var y=50;
          imageMode(CENTER);
          if(this.foodStock!==0){
            for(var i=0;i<this.foodStock;i++){
              if(i%10===0){
                x=50;
                y=y+50;
              }
              image(this.image,x,y,50,50);
              x=x+30;
            }
          }
           
      }
    }
