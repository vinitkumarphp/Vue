const App1=Vue.createApp({
    data(){
        return{
            name:"vinit kumar",
            link:'https://www.google.com/',
            messageA:"He is a voter.",
            messageB:"He is below 18.",
            testHtml:'<h1> Welcome </h1>'
        };
    },
    methods:{

        checkUser(){

            var age=17;
            if(age>=18){
                return this.messageA;
            }else{
                return  this.messageB;
            }
        }

    }
});
App1.mount("#app1");
