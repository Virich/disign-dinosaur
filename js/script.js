//работа с меню
$(document).ready(function () {
    $('.menu').on('click', function (e) {
        e.preventDefault();
        var index=$(this).closest('.menu').index();
        $(this).css('background','lightgreen').siblings().css('background','grey');
        $('.tabs').eq(index).addClass('active').siblings().removeClass('active');
    });
});
//вывод частей на основной экран
//тело
$('.body img').on('click',function(){
    var index = $(this).closest('.body').index();
    $('.dino-body').css('background','url(./image/body/'+ ++index +'.png) no-repeat')
                   .css('background-size','100%')
                   .css('display', 'block');
});
//глаза
$('.eyes img').on('click',function(){
    var index = $(this).closest('.eyes').index();
    $('.dino-eyes').css('background','url(./image/eyes/'+ ++index +'.png) no-repeat')
                   .css('background-size','70%')
                   .css('display', 'block');
});
//шлапа
$('.heat img').on('click',function(){
    var index = $(this).closest('.heat').index();
    $('.dino-heat').css('background','url(./image/heat/'+ ++index +'.png) no-repeat')
                   .css('background-size','100%')
                   .css('display', 'block');
});
//рот
$('.lips img').on('click',function(){
    var index = $(this).closest('.lips').index();
    $('.dino-lips').css('background','url(./image/lips/'+ ++index +'.png) no-repeat')
                   .css('background-size','100%')
                   .css('display', 'block');
});
//пятна
$('.spot img').on('click',function(){
    var index = $(this).closest('.spot').index();
    $('.dino-spot').css('background','url(./image/spot/'+ ++index +'.png) no-repeat')
                   .css('background-size','90%')
                   .css('display', 'block');
});
//гребень
$('.comb img').on('click',function(){
    var index = $(this).closest('.comb').index();
    $('.dino-comb').css('background','url(./image/comb/'+ ++index +'.png) no-repeat')
                   .css('background-size','100%')
                   .css('display', 'block');
});
//удаление єлементов 
$('.dino-body').on('click',function(){ $(this).css('display', 'none'); });
$('.dino-eyes').on('click',function(){ $(this).css('display', 'none'); });
$('.dino-lips').on('click',function(){ $(this).css('display', 'none'); });
$('.dino-heat').on('click',function(){ $(this).css('display', 'none'); });
$('.dino-spot').on('click',function(){ $(this).css('display', 'none'); });
$('.dino-comb').on('click',function(){ $(this).css('display', 'none'); });
 
