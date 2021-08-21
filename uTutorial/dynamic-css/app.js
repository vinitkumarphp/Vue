
const app = Vue.createApp({


    data() {
        return {
            
            Asl:false,
            Bsl:false,
            Csl:false,
        }
    },
 

    computed:{

        AslClasses(){

            return {block:true, bgstyle: this.Asl}
        }

    },

    methods: {
     
        setSelection(box ){

          

            if (box=='A') {

                this.Asl=!this.Asl
                // this.Asl=true;
                // this.Bsl=false;
                // this.Csl=false;
                
                
            } else if(box=='B') {
                this.Bsl=!this.Bsl;
                // this.Bsl=true;
                // this.Csl=false;
                // this.Asl=false;

            } else if(box=='C'){
                this.Csl=!this.Csl;
                // this.Csl=true;
                // this.Bsl=false;
                // this.Asl=false;

             }

        }
        
        

    },


});
app.mount("#app");