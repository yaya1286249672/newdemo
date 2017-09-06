<template id = "header">
    <div id = "myheader">
        测试头部组件
        <!--<p>{{str}}</p>-->
    </div>
</template>

<script type = "text/javascript">
    var header = {
        template:"#header",
        data:function(){
            return{
                /*str:"我就是那个神奇的str"*/
            }
        }
    };
    module.exports = header;
</script>

<style>
    #myheader{width:100%;height:48px;background:#000;color:#fff;line-height: 48px;text-align: center;font-size: 30px;}
</style>