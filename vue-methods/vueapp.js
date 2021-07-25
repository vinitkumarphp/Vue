const App1=Vue.createApp({
    data(){
        return{
            name:"vinit kumar",
            link:'https://www.google.com/'
        };
    },
    methods:{

        checkUser(){

            var age=18;
            if(age>=18){
                return "He is a voter.";
            }else{
                return "He is below 18.";
            }
        }

    }
});
App1.mount("#app1");
