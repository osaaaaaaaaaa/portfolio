// �����̂��������̋N�_�ƂȂ�A�j���[�V�����̖��O���`
function fadeAnime() {

    // �t�F�[�h[area1]
    $('.area1').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });

    // �t�F�[�h[area2]
    $('.area2').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });

    // �t�F�[�h[area3]
    $('.area3').each(function () { //fadeUpTrigger�Ƃ����N���X����
        var elemPos = $(this).offset().top - 50;//�v�f���A50px���
        var scroll = $(window).scrollTop();
        var windowHeight = $(window).height();
        if (scroll >= elemPos - windowHeight) {
            $(this).addClass('CssfadeUp');// ��ʓ��ɓ�������CssfadeUp�Ƃ����N���X����ǋL
        }
    });
}

// ��ʂ��X�N���[���������瓮���������ꍇ�̋L�q
$(window).scroll(function () {
    fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��X�N���[���������瓮���������ꍇ�̋L�q

// ��ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q
$(window).on('load', function () {
    fadeAnime();/* �A�j���[�V�����p�̊֐����Ă�*/
});// �����܂ŉ�ʂ��ǂݍ��܂ꂽ�炷���ɓ����������ꍇ�̋L�q

