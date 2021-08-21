 Vue.createApp({

    data() {
        return {
            myName:'vinit Kumar',
            myAge:32,
            inputValue:"India",
            imageLink:'https://images.unsplash.com/photo-1517404215738-15263e9f9178?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'
        }
    },
    methods: {
        getAge:function(){

            return this.myAge+5;
        },
        favNumber:function () {
            const randomNum=Math.random();
            if(randomNum>0 && randomNum<1){

                 return randomNum;
            }

        }
    },

 }).mount("#assignment")