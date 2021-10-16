import { createApp } from 'vue';


import App from './App.vue';

import ContactList from "./components/ContactList";

import FriendsList from "./components/FriendsList";

import FriendsListPropsValidate from "./components/FriendsListPropsValidate";

import ContactForm from "./components/ContactForm";


const app=createApp(App);
app.component('contact-form',ContactForm);
app.component('contact-list',ContactList);

app.component('friends-list',FriendsList);

app.component('friends-list-props-validate',FriendsListPropsValidate);



app.mount('#app');
