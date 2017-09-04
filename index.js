/**
 * Created by Mr.zhao on 2017/9/4.
 */
$('.tabs>li').on('click',function(){
    var index = $(this).index()
    $(this).addClass('active').siblings().removeClass('active')
    $('.page > .content').hide()
    $('.page > .content').eq(index).show()
})
