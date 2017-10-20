/**
 * Created by wang on 2017/9/12.
 */
$(function () {
    $(function () {
        FastClick.attach(document.body)
    });


    /*
     * 金额进度条 begin
     * */
    /*进度条*/
    $('#slider1').slider(function (percent) {
        if (percent == 1) {
            $('#slider1').next('.flex_box').find('.weui-slider-box__value').html(1)
        } else {
            $('#slider1').next('.flex_box').find('.weui-slider-box__value').html(percent * 2)
        }
    });

    /*进度条增加*/
    $('.add').click(function () {
        var distance = $('#sliderInner').width() * 0.005;
        /*幅度*/

        /*计算长度*/
        var left = parseFloat((parseFloat($('#sliderHandler').css('left')) + distance) / $('#sliderInner').width() * 100);
        if (left > 100) {
            left = 100
        }
        $('#sliderTrack').css('width', left + "%");
        $('#sliderHandler').css('left', left + "%")
        $('#slider1').next('.flex_box').find('.weui-slider-box__value').html(parseInt(left * 2))
    });

    /*进度条减少*/
    $('.del').click(function () {
        ;
        var distance = $('#sliderInner').width() * 0.005;
        /*幅度*/
        /*计算长度*/

        var left = parseFloat((parseFloat($('#sliderHandler').css('left')) - distance) / $('#sliderInner').width() * 100);
        if (left < 1) {
            left = 1
            $('#slider1').next('.flex_box').find('.weui-slider-box__value').html(1)
        } else {
            $('#slider1').next('.flex_box').find('.weui-slider-box__value').html(parseInt(left * 2))
        }

        $('#sliderTrack').css('width', left + "%");
        $('#sliderHandler').css('left', left + "%")
    });
    /*end*/

    /*
     * 期限进度条
     * */
    /*进度条*/
    $('#slider2').slider(function (percent) {
        if (percent == 1) {
            $('#slider2').next('.flex_box').find('.weui-slider-box__value').html(1)
            $('#sliderTrack2').css('width', "4.1%");
            $('#sliderHandler2').css('left', "4.1%")
        } else {
            $('#slider2').next('.flex_box').find('.weui-slider-box__value').html(parseInt(percent * 24 / 100))
        }
    });

    /*进度条增加*/
    $('.add2').click(function () {
        var distance = $('#sliderInner2').width() * 0.01 * (100 / 24);
        /*幅度*/

        /*计算长度*/
        var left = parseFloat((parseFloat($('#sliderHandler2').css('left')) + distance) / $('#sliderInner2').width() * 100);
        if (left > 100) {
            left = 100
        }
        $('#sliderTrack2').css('width', left + "%");
        $('#sliderHandler2').css('left', left + "%")
        $('#slider2').next('.flex_box').find('.weui-slider-box__value').html(parseInt(left * 24 / 100))
    });
    /*进度条减少*/
    $('.del2').click(function () {
        var distance = $('#sliderInner2').width() * 0.01 * (100 / 24);
        /*幅度*/

        /*计算长度*/
        var left = parseFloat((parseFloat($('#sliderHandler2').css('left')) - distance) / $('#sliderInner2').width() * 100);
        if (left >= 4.1) {
            $('#sliderTrack2').css('width', left + "%");
            $('#sliderHandler2').css('left', left + "%")
            $('#slider2').next('.flex_box').find('.weui-slider-box__value').html(parseInt(left * 24 / 100))
        }

    });
    /*end*/


    /*菜单选项*/
    $('.menu_item').click(function () {
        $('.menu_item').removeClass('menu_on')
        $(this).toggleClass('menu_on')
    })
})