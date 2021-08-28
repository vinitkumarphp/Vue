<template>
    
    <h1>Friends List</h1>

        <friend-list v-for="user in users"
            :key="user.id"
                    :userName="user.name"
                    :userEmail="user.email"
                    :userMobile="user.mobile"
            
            ></friend-list>
     
    

</template>

<script>
export default {
    data() {
        return {
            users:[
                {
                    id:1,
                    name:'Vinit Kumar',
                    email:'vk@gmail.com',
                    mobile:132132132
                 },
                 {
                    id:2,
                    name:'Rupesh Kumar',
                    email:'rupesh@gmail.com',
                    mobile:13131321321
                 },

            ]
        }
    },
}
</script>