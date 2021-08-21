const app = Vue.createApp({

  

    data() {
        return {
            user:'',
            visibleIs:true,
            bgcolor:''
        }
    },
    computed:{
          addCss() {
            
       
      return  {
          user1: this.user=='user1',
           user2: this.user=='user2',
           visible:this.visibleIs,
           hidden:!this.visibleIs

        } 
    }
    },
    methods: {
        visible(){

            this.visibleIs=!this.visibleIs;

        }
    },
    
});



app.mount("#assignment");