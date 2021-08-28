import { createApp } from 'vue';


import App from './App.vue';
import ContactList from "./components/ContactList";
import FriendsList from "./components/FriendsList";
const app=createApp(App);
app.component('contact-list',ContactList);

app.component('friends-list',FriendsList);

app.mount('#app');
