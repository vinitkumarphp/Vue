<template>
    <div class="container">
        <div class="card">
            <h1>{{name}}</h1>
            <div class="card-content">
                <contact-list></contact-list>
                <contact-list></contact-list>
            </div>
        </div>

        <div class="card">
            <friends-list v-for="contact in  contacts" :key="contact.id" :name="contact.name" :email="contact.email"
                          :phone="contact.phone"></friends-list>
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
                        phone: "12313213"
                    },
                    {
                        id: 2,
                        name: "Bhanu Kumar",
                        email: "Bhanu@gmail.com",
                        phone: "12313213"
                    },
                    {
                        id: 3,
                        name: "Rupesh Kumar",
                        email: "Rupesh@gmail.com",
                        phone: "12313213"
                    }
                ]

            }
        }
    }
</script>