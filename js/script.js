//slick slider部分//
$(function() {
    $('.top-slider').slick({
        dots: true
    });
//ログインのモーダルのclick作成//
    $('#login-show').click(function() {
        $('#login-modal').fadeIn();
    });
//ログインモーダルの閉じるボタン作成//
    $('.close-modal').click(function() {
        $('#login-modal').fadeOut();
    });
//スクロールアニメーションの作動//
    AOS.init()

//アコーディオンの作動//
    $('.faq-list-item').click(function() {
        var $answer = $(this).find('.answer');
        if($answer.hasClass('open')) {
            $answer.removeClass('open');
            $answer.slideUp();
            $(this).find('span').text('+');
        } else {
            $answer.addClass('open');
            $answer.slideDown();
            $(this).find('span').text('-');
        }
    });
//トップへ戻るボタン//
    // 変数宣言と代入
    var pageTop = $("#page-top");
    // ボタン非表示
    pageTop.hide();

    // 80pxスクロールしたらボタン表示
    $(window).scroll(function () {
        if ($(this).scrollTop() > 80) {
        // 0.3秒でフェードイン
        pageTop.fadeIn(300);
    } else {
        // 0.3秒でフェードアウト
        pageTop.fadeOut(300);
    }
    });
    // 0.5秒でページトップへ戻る
    pageTop.click(function () {
        $("body, html").animate({ scrollTop: 0}, 500);
        return false;
    })
});