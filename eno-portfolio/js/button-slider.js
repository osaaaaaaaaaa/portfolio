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
// nextボタンに関数を割り当て
function nextClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count++;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
// prevボタンに関数を割り当て
function prevClick() {
    slide.classList.remove(`slide${count % totalSlides + 1}`);
    count--;
    if (count < 0) count = totalSlides - 1;
    slide.classList.add(`slide${count % totalSlides + 1}`);
    updateListBackground();
}
function startAutoPlay() {
    autoPlayInterval = setInterval(nextClick, 6000); // 自動でスライドが更新される // 数字は更新するまでの秒数
}
function resetAutoPlayInterval() {
    clearInterval(autoPlayInterval);
    startAutoPlay();
}
// 次のスライドへ進む関数
next.addEventListener('click', () => {
    nextClick();
    resetAutoPlayInterval();
});
// 前のスライドへ戻る関数
prev.addEventListener('click', () => {
    prevClick();
    resetAutoPlayInterval();
});
// インジケーターを更新する関数
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
