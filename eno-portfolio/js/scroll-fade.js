// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime() {

    // フェード[area1]
    $('.area1').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// 画面内に入ったらCssfadeUpというクラス名を追記
        }
    });

    // フェード[area2]
    $('.area2').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// 画面内に入ったらCssfadeUpというクラス名を追記
        }
    });

    // フェード[area3]
    $('.area3').each(function () { //fadeUpTriggerというクラス名が
        var elemPos = $(this).offset().top - 50;//要素より、50px上の
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// 画面内に入ったらCssfadeUpというクラス名を追記
        }
    });
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
    fadeAnime();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

