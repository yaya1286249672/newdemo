<template>
    <div id = "myfooter">

       <div> <router-link to="/index">首页</router-link></div>
       <div> <router-link to="/about">关于</router-link></div>
        <div> <router-link to="/find">发现</router-link></div>



    </div>
</template>

<script type = "text/javascript">
    var footer = {
        template:"#footer",
        data:function(){
            return{
            }
        }
    };
    module.exports = footer;
</script>

<style>
    #myfooter{width:100%;height:3rem;background:#fc9;line-height: 3rem;display: flex;font-size: 30px;
    text-align: center;position: fixed;bottom: 0;}
    #myfooter div{flex-grow: 1;color: #fff;}
    #myfooter a{text-decoration: none;color: #fff;}
</style>
