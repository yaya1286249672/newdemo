<template id = "find">
    <div>
        <h2>
            发现页面
        </h2>
        <div class="swiper-container">
            <div class="swiper-wrapper">
                <div class="swiper-slide">Slide 1</div>
                <div class="swiper-slide">Slide 2</div>
                <div class="swiper-slide">Slide 3</div>
            </div>
            <!-- 如果需要分页器 -->
            <div class="swiper-pagination"></div>

            <!-- 如果需要导航按钮 -->
            <div class="swiper-button-prev"></div>
            <div class="swiper-button-next"></div>

            <!-- 如果需要滚动条 -->
            <div class="swiper-scrollbar"></div>
        </div>
        <div>
            <!--<button @click.stop = "exfun()">啦啦啦</button>-->
            <mt-button size="small">small</mt-button>
            <mt-button size="large">large</mt-button>
            <mt-button size="normal">normal</mt-button>
        </div>
    </div>
</template>
<style>
    .swiper-container {
        width: 600px;
        height: 300px;
    }
</style>
<script type = "text/javascript">
    var find = {
        template:"#find",
        data:function(){
            return{

            }
        },
        methods:{
            runSwiper(){
                var mySwiper = new Swiper ('.swiper-container', {
                    direction: 'horizontal',
                    autoplay: 1000,
                    loop: true,

                    // 如果需要分页器
                    pagination: '.swiper-pagination',

                    // 如果需要前进后退按钮
                    nextButton: '.swiper-button-next',
                    prevButton: '.swiper-button-prev',

                    // 如果需要滚动条
                    scrollbar: '.swiper-scrollbar',
                })
            },
            exfun(){
                console.log("哈哈")
            }
        },
        mounted: function () {
            console.log('mounted 钩子执行...');
           this.runSwiper()
        },
    };
    module.exports = find;
</script>
