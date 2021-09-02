<template>
    <article class="message is-primary">
        <div class="message-header">

            Add Contact
        </div>

        <div class="message-body">
       <form @submit.prevent="addContact">

           <input v-model="enteredName" class="input is-primary mt-5" type="text" placeholder="Name">
           <input v-model="enteredEmail" class="input is-primary mt-5" type="text" placeholder="Email">
           <input v-model="enteredPhone" class="input is-primary mt-5" type="text" placeholder="Phone">

           <input class="button  mt-5 is-success" type="submit" value="Submit input">
       </form>
   </div>
    </article>
</template>

<script>
    export default {
        name: "Contact Form",

        emits:['add-contact'],
        data(){
                return{
                    enteredName:"",
                    enteredEmail:"",
                    enteredPhone:"",
                }
        },
        methods:{
            addContact(){

                this.$emit('add-contact',this.enteredName,this.enteredEmail,this.enteredPhone);

            }
        }
    }
</script>

<style scoped>

</style>