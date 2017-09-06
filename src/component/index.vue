<template id = "index">
    <div>
        <h2>index页面</h2>
        <router-link to="/index/in1">1</router-link>
        <router-link to="/index/in2">2</router-link>
        <router-view></router-view>
    </div>
</template>

<script type="text/javascript">
    var index = {
        template:"#index"
    };
    module.exports = index;
</script>