import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

import Header from './components/header_footer/Header';
import Footer from './components/header_footer/Footer';
import Home from './components'
import Article from './components/Articles';
import Contact from './components/Contact';


const app =  createApp(App);

const routes = createRouter({
    history: createWebHistory(),
    routes : [
        { path : '/', component : Home },
        { path : '/articles', component : Article },
        { path : '/contact', component : Contact },
    ]

});


app.component('app-header',Header);
app.component('app-footer',Footer);
app.use(routes)
app.mount('#app')

