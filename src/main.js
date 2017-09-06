import Vue from 'vue'
import App from './App.vue'
import  VueRouter from 'vue-router';
Vue.use(VueRouter);

import Mint from 'mint-ui';
import { Button } from 'mint-ui';
Vue.use(Mint);

import index from './component/index.vue';
import about from './component/about.vue';
import find from './component/find.vue';
import in1 from './component/in1.vue';
import in2 from './component/in2.vue';
var router = [
    {
        path:'/index',
        component:index,
        children:[
            {
            path:'/index/in1',
            component:in1
        }, {
                path:'/index/in2',
                component:in2
            }
        ]
    },
    {path:'/about',component:about},
    {path:'/find',component:find},
    {path:'*',component:index}
];
var routers = new VueRouter({
    routes: router   
});
new Vue({
  el: '#app',
    router:routers,
  render: h => h(App)
});
