
const app = Vue.createApp({


    data() {
        return {
            
            goalEnter:'',
            goals:[],
          
        }
    },



    watch:{

       
    },

    computed:{ 
        
    },

    methods: {
     
        saveGolas( ){

            this.goals.push(this.goalEnter);
            
        },
        removeItems(ind){
            this.goals.splice(ind,1);
        }
    }

    


});
app.mount("#app");