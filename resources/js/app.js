require('./bootstrap');
import VueRouter from'vue-router';
import Swal from 'sweetalert2';

window.Vue = require('vue');
Vue.use(VueRouter);

// vue x config
    import Vuex from 'vuex';
    Vue.use(Vuex);
    import storeData from './store/index';
    const store = new Vuex.Store(
        storeData
    );

//moment js config
import {filter} from './filter'


// v-form content

import { Form, HasError, AlertError } from 'vform'
window.Form = Form;
Vue.component(HasError.name, HasError);
Vue.component(AlertError.name, AlertError);

window.Swal = Swal;

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
});


window.Toast = Toast;

let routes = [
    {path:"/home", component:require('./components/admin/AdminMain').default},
    {path:"/categoryList", component: require('./components/admin/Category/List.vue').default},
    {path:"/add-category", component: require('./components/admin/Category/New.vue').default},
    {path:"/edit-category/:categoryid", component: require('./components/admin/Category/Edit.vue').default},
    {path:"/post-list", component: require('./components/admin/post/List.vue').default},
    {path:"/edit-post/:postid", component: require('./components/admin/post/Edit.vue').default},
    {path:"/add-post", component: require('./components/admin/post/New.vue').default},
    //frontend component path
    {path:"/", component: require('./components/public/PublicHome.vue').default},
    {path:"/blog", component: require('./components/public/blog/BlogPost.vue').default},
    {path:"/single-blog/:postid", component: require('./components/public/blog/SingleBlog.vue').default},
    {path:"/categories/:id", component: require('./components/public/blog/BlogPost.vue').default},
    {path:"/about-us", component: require('./components/public/blog/About-Us.vue').default},
    {path:"/portfolio", component: require('./components/public/blog/Portfolio.vue').default},
    {path:"/contact", component: require('./components/public/blog/Contact.vue').default},


];
const router = new VueRouter({
    mode: 'history',
    routes
})

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key).default))

Vue.component('example-component', require('./components/ExampleComponent.vue').default);
Vue.component('admin-master', require('./components/admin/AdminMaster').default);
Vue.component('home-main', require('./components/public/PublicMaster.vue').default);



const app = new Vue({
    el: '#app',
    router,
    store
});
