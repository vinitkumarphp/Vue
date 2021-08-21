
const app = Vue.createApp({

    data() {
        return {
            taskAdd:'',
            tasks:[],
            isVisible:true,
        }
    },
    computed:{

        buttonText(){

            return this.isVisible?'Hide':'Show';

        }
    },
    methods: {
        addTask(){

            this.tasks.push(this.taskAdd)
           

        },
        toggalList(){

            this.isVisible=!this.isVisible;

        }
    },



});
app.mount("#assignment");