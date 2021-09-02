<template>
    <div class="container">
        <div class="card">
            <h1>{{name}}</h1>
            <div class="card-content">
<!--                <contact-list></contact-list>-->
<!--                <contact-list></contact-list>-->

                <contact-form @add-contact="addContact"></contact-form>
            </div>
        </div>

        <div class="card">
<!--            <friends-list v-for="contact in  contacts" :key="contact.id" :name="contact.name" :email="contact.email"-->
<!--                          :phone="contact.phone" :isFab="contact.isFab"></friends-list>-->
            <friends-list-props-validate v-for="contact in  contacts"
                                         :id="contact.id"
                                         :key="contact.id"
                                         :name="contact.name"
                                         :email="contact.email"
                                         :phone="contact.phone"
                                         :isFab="contact.isFab"
                                         @toggle-favorite="setIsfavorite"
                                        @delete="deleteContact">


            </friends-list-props-validate>

        </div>

    </div>

</template>
<script>

    export default {
        data() {
            return {
                name: 'vinit',
                contacts: [
                    {
                        id: 1,
                        name: "Raunak Kumar",
                        email: "Raunak@gmail.com",
                        phone: "12313213",
                        isFab:false
                    },
                    {
                        id: 2,
                        name: "Bhanu Kumar",
                        email: "Bhanu@gmail.com",
                        phone: "12313213",
                        isFab:true
                    },
                    {
                        id: 3,
                        name: "Rupesh Kumar",
                        email: "Rupesh@gmail.com",
                        phone: "12313213",
                        isFab:false
                    }
                ]

            }
        },
        methods:{
            setIsfavorite(favId){
               // alert("HI"+favId);
                const  identifyFriend= this.contacts.find(
                    (concat)=>concat.id===favId
                );
                identifyFriend.isFab=! identifyFriend.isFab;

            },
            addContact(enteredName,enteredEmail,enteredPhone){

                const newContact={
                    id:this.contacts.length+1,//new Date().toISOString(),
                    name:enteredName,
                    email:enteredEmail,
                    phone:enteredPhone,
                    isFab:false
                };
                this.contacts.push(newContact);

            },
            deleteContact(contactId){

                this.contacts=this.contacts.filter((contact) => contact.id != contactId);

            }
        }

    }
</script>