<template>
    <article class="message is-primary">
        <div class="message-header">
            <p>{{name}} <span v-if="friendIsfab"> ( Favoriate ) </span></p>
            <div class="control">
                <button @click="setVisibleFriend" class="button is-link">Show / Hide Detail</button>
                <button @click="toogleFavorite" class="button is-success">Toogle Favorite</button>
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
            'phone',
            'isFab'
        ],
        name: "FriendsList",

        data(){
            return{
                isVisibleNow:false,
                friendIsfab:this.isFab
            }

        },

        methods:{
            setVisibleFriend(){
                this.isVisibleNow= !this.isVisibleNow;
            },
            toogleFavorite(){

                if(this.friendIsfab==0){
                    this.friendIsfab=1;
                }else {
                    this.friendIsfab=0;
                }

            }

        }


    }
</script>

