<template>
  <div id="app">
    <v-header></v-header>
    <router-view></router-view>
    <v-footer></v-footer>
  </div>
</template>

<script>
import header from './component/header.vue';
import footer from './component/footer.vue';

export default {
  name: 'app',
  data () {
    return {
    
    }
  },
    components:{
      'v-header':header,
      'v-footer':footer
    }
}
</script>
<style>
	*{margin:0;padding:0}
	#app{width:100%;height:100%;}
</style>