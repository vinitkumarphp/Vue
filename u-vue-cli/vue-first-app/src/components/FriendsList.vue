<template>
    <article class="message is-primary">
        <div class="message-header">
            <p>{{name}}</p>
            <div class="control">
                <button @click="setVisibleFriend" class="button is-link">Show / Hide Detail</button>
            </div>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body" v-if="isVisibleNow">

            <ul>
                <li class="content">{{email}}</li>
                <li class="content">{{phone}}</li>

            </ul>
        </div>
    </article>
</template>

<script>
    export default {
        props:[
            'name',
            'email',
            'phone'
        ],
        name: "FriendsList",

        data(){
            return{
                isVisibleNow:false
            }

        },

        methods:{
            setVisibleFriend(){
                this.isVisibleNow= !this.isVisibleNow;
            }
        }


    }
</script>

