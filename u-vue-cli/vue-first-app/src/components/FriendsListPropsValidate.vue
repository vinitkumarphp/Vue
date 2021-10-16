<template>
    <article class="message is-primary">
        <h1> Props Validate </h1>
        <div class="message-header">

            <p>{{name}} <span v-if="isFab"> ( Favoriate ) </span></p>
            <div class="control">
                <button @click="setVisibleFriend" class="button is-link">Show / Hide Detail</button>
                <button @click="toogleFavorite" class="button is-success">Toogle Favorite</button>
                <button @click="$emit('delete',id)" class="button is-success">Delete</button>

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
        name: "FriendsList",
        props:{
            id:{
                type:Number,
                required:true
            },
            name:{
                type:String,
                required:true
            },
            email:{
                type:String,
                required: true,
            },
            phone:{
                type:String,
                required: true,
            },
            isFab:{
                type:Boolean,
                required: false,
                default:false,


            }
        },
        emits:["toggle-favorite","delete"],

    /*    emits:{
            "toggle-favorite":function (id) {
                    if(id){
                       return true;
                    }else{
                        console.log("Id Is Missing");
                        return  false;
                    }

            }
        },
*/
        data(){
            return{
                isVisibleNow:false,
               // friendIsfab:this.isFab
            }

        },

        methods:{
            setVisibleFriend(){
                this.isVisibleNow= !this.isVisibleNow;
            },
            toogleFavorite(){

                this.$emit('toggle-favorite',this.id);

                // if(this.friendIsfab==0){
                //     this.friendIsfab=1;
                // }else {
                //     this.friendIsfab=0;
                // }

            }

        },



    }
</script>

