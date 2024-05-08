const slide = document.getElementById('slide');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const indicator = document.getElementById('indicator');
const lists = document.querySelectorAll('.list');
const totalSlides = lists.length;
let count = 0;
let autoPlayInterval;
function updateListBackground() {
    for (let i = 0; i < lists.length; i++) {
        lists[i].style.backgroundColor = i === count % totalSlides ? '#000' : '#fff';
    }
}
// next�{�^���Ɋ֐������蓖��
function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
// prev�{�^���Ɋ֐������蓖��
function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if (count < 0) count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 6000); // �����ŃX���C�h���X�V����� // �����͍X�V����܂ł̕b��
}
function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}
// ���̃X���C�h�֐i�ފ֐�
next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
});
// �O�̃X���C�h�֖߂�֐�
prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
});
// �C���W�P�[�^�[���X�V����֐�
indicator.addEventListener('click', (event) => {
    if (event.target.classList.contains('list')) {
        const index = Array.from(lists).indexOf(event.target);
        slide.classList.remove(`slide${count % totalSlides + 1}`);
        count = index;
        slide.classList.add(`slide${count % totalSlides + 1}`);
        updateListBackground();
        resetAutoPlayInterval();
    }
});
startAutoPlay();
