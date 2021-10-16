
const app = Vue.createApp({


    data() {
        return {
            
            counter:0,
            name:'',
            setLastName:'',
            refUserName:'',
        }
    },



    watch:{

        counter( value){

                if(value>5)
                {
                    this.counter=0;
                }

        }

    },

    computed:{ 
        fullname(){ 
            console.log("HI...");
            if(this.name==='' || this.setLastName==='')   {
                return '';
            } 
            return this.name+' '+ this.setLastName 
        }
    },

    methods: {
     
        setLastNamedata( ){

            this.setLastName=event.target.value;

        },
        
        setName( ){

            this.name=event.target.value;

        },

        add:function (){

            this.counter++;

        },
        sub(){
            this.counter=this.counter-1;
        },
        setUserName(){

            this.refUserName=this.$refs.setUserNamev.value;

            console.log(this.$refs.setUserNamev);
        }

    },


});
app.mount("#app");