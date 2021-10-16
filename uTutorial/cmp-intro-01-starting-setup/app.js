const app = Vue.createApp({


    data() {
        return {
           
            friends:[
                {
                    id:1,
                    name:'vinit',
                    email:'vk@gmail.com',
                    phone:'123123123',
                },
                {
                    id:2,
                    name:'rupesh',
                    email:'rupesh@gmail.com',
                    phone:'123123123123'
                },
            ]

        }
    },


   

});

app.component('first-component',{

    template:`
    <li>
    <h2>{{friend.name}}</h2>
    <button @click="setDetailVisible">Show Details</button>
    <ul v-if="isVisible">
      <li><strong>Phone:</strong> {{friend.phone}}</li>
      <li><strong>Email:</strong>{{friend.email}}</li>
    </ul>
  </li>
    
    `,


    data() {
        return {
            isVisible:false,
            friend:
                {
                    id:1,
                    name:'vinit',
                    email:'vk@gmail.com',
                    phone:'123123123',
                }
        }
    },

    methods: {
        
        setDetailVisible(){

            this.isVisible=!this.isVisible;

        }

    },

})

app.mount("#app");