<template>

    <div>
        <h2>{{userName}}</h2>

        <button @click="showHideDetail"> Show Detail</button>

        <ul v-if="isVisible" >
            <li>{{userEmail}}</li>
            <li>{{userMobile}}</li>
        </ul>

    </div>  

</template>

<script>
export default {
    props:[
        'userName' ,'userEmail','userMobile'
    ],
    data() {
        return {
            isVisible:false,
            user:{
                    id:1,
                    name:'Vinit Kumar',
                    email:'vk@gmail.com',
                    mobile:1231321
                 },
        }
    },

    methods: {
        
        showHideDetail(){
            this.isVisible=!this.isVisible
        }

    },

}
</script>