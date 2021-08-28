<template>

    <article class="message is-primary">
        <div class="message-header">
            <p>{{name}}</p>
            <div class="control">
                <button @click="setVisible" class="button is-link">Show / Hide Detail</button>
            </div>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body" v-if="isVisible">

            <ul>
                <li class="content">{{email}}</li>
                <li class="content">{{phone}}</li>

            </ul>
        </div>
    </article>


</template>

<script>
    export default {
        name: "ContactList",
        data(){
            return{
                isVisible:false,
                id:1,
                name:"vinit Kumar",
                email:"vinit@gmail.com",
                phone:"12313213"

            }
        },
        methods:{
            setVisible(){
                this.isVisible= !this.isVisible;
            }
        }
    }
</script>

<style scoped>

</style>