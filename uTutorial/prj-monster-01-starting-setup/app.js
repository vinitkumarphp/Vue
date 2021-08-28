
function getRandomValue(min,max) {
 return    Math.floor( Math.random() *(max-min))+min;
}

const app = Vue.createApp({

    data() {
        return {
            
            playerHealth:100,
            monsterHealth:100
        };
    },
    computed:{

        monBarStyle(){
          return  {width:this.monsterHealth+'%' }
        },
        playerBarStyle(){
            return {width:this.playerHealth+'%' }
        }

    },
    methods: {
        
        attackMonster(){

          const attackValue= getRandomValue(5,12);//Math.floor( Math.random() *(12-5))+5;
          this.monsterHealth=this.monsterHealth-attackValue;
          this.attackPlayer();
          console.log(this.attackValue);   
        },


        attackPlayer(){
            const attackValue= getRandomValue(8,15);//Math.floor( Math.random() *(12-8))+8;
       
            this.playerHealth=attackValue;
        }

    },

});
app.mount("#game");