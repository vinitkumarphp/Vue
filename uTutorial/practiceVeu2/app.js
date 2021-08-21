const myApp=Vue.createApp({

    data() {
        return {
            courseGoal:'First Class',
            pageLink:'https://www.google.co.in/'
        }
    },
    // method 

    methods: {
        
        showData:function(){
            const randomNum=Math.random();
            if(randomNum>0.5)
            {
                return "Learn View";
            } else {
                return "expert in vue"
            }

        }

    },

});

myApp.mount("#app")