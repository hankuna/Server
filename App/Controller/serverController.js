/**
 * Created by Administrator on 2017/10/19.
 */
app.controller("severController", function ($timeout) {
    $timeout(function(){
        var myswiper=new Swiper(".swiper-container",{
            autoplay:2000,
            //滑动
            loop:true,
            pagination:".swiper-pagination"
        })
    },1000)
})
