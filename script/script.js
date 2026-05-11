// Xem thông tin bằng cách nhập email cố định

const inputEmail = document.querySelector('.pi-input-email-here')
const whatisyourEmail = document.querySelector('.pi-email');
const submitEmail = document.querySelector('.pi-submit');
const viewAfterSubmit = document.querySelector('.pi-main-personal-info')
const footerHint = document.querySelector('.pi-footer')

submitEmail.addEventListener('click', () => {
    if (whatisyourEmail.value === "khoatlqfx38136@funix.edu.vn") {
        inputEmail.classList.add('hidden');
        viewAfterSubmit.classList.remove('hidden');
    }
    else {
        footerHint.textContent = "Sai địa chỉ rồi! Bạn còn nhớ không đấy?"
    }
})



// Hiển thị thông tin như sở thích, kĩ năng khi bấm nút "View More"

const viewMore1 = document.querySelector('.fitag-view-more-1');
const showHide1 = document.querySelector('.full-information-show-hide-1');

viewMore1.addEventListener('click', () => {
    if (showHide1.classList.contains('hidden')) {
        showHide1.classList.remove('hidden');
        viewMore1.textContent = "View Less";
    } else {
        showHide1.classList.add('hidden');
        viewMore1.textContent = "View More";
    }
});


const viewMore2 = document.querySelector('.fitag-view-more-2');
const showHide2 = document.querySelector('.full-information-show-hide-2');

viewMore2.addEventListener('click', () => {
    if (showHide2.classList.contains('hidden')) {
        showHide2.classList.remove('hidden');
        viewMore2.textContent = "View Less";
    } else {
        showHide2.classList.add('hidden');
        viewMore2.textContent = "View More";
    }
});


const viewMore3 = document.querySelector('.fitag-view-more-3');
const showHide3 = document.querySelector('.full-information-show-hide-3');

viewMore3.addEventListener('click', () => {
    if (showHide3.classList.contains('hidden')) {
        showHide3.classList.remove('hidden');
        viewMore3.textContent = "View Less";
    } else {
        showHide3.classList.add('hidden');
        viewMore3.textContent = "View More";
    }
});

const viewMore4 = document.querySelector('.fitag-view-more-4');
const showHide4 = document.querySelector('.full-information-show-hide-4');

viewMore4.addEventListener('click', () => {
    if (showHide4.classList.contains('hidden')) {
        showHide4.classList.remove('hidden');
        viewMore4.textContent = "View Less";
    } else {
        showHide4.classList.add('hidden');
        viewMore4.textContent = "View More";
    }
});

const viewMore5 = document.querySelector('.fitag-view-more-5');
const showHide5 = document.querySelector('.full-information-show-hide-5');

viewMore5.addEventListener('click', () => {
    if (showHide5.classList.contains('hidden')) {
        showHide5.classList.remove('hidden');
        viewMore5.textContent = "View Less";
    } else {
        showHide5.classList.add('hidden');
        viewMore5.textContent = "View More";
    }
});

const viewMore6 = document.querySelector('.fitag-view-more-6');
const showHide6 = document.querySelector('.full-information-show-hide-6');

viewMore6.addEventListener('click', () => {
    if (showHide6.classList.contains('hidden')) {
        showHide6.classList.remove('hidden');
        viewMore6.textContent = "View Less";
    } else {
        showHide6.classList.add('hidden');
        viewMore6.textContent = "View More";
    }
});