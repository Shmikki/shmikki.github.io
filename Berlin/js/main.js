const headerLocal = document.querySelector(".header"),
videoButtonPlay = document.querySelector('.button-video'),
helpSucsessContent = document.querySelector('.helpSuccessful-content'),
video = document.querySelector('.video'),
priceType = document.querySelector('.price-type');

let selectedButton = document.querySelector('.button_active'),
selectedCard = document.querySelector('.yearly');

window.addEventListener('scroll', () => {
    let =  maxHeaderHeight = document.querySelector('.top-content').offsetHeight - headerLocal.offsetHeight;
    headerLocal.style.background =  visualViewport.pageTop > maxHeaderHeight ? 'rgba(34, 45, 61, 1)' : 'none';
});

function videoPlay(){
        helpSucsessContent.style.display = 'none';
        video.style.zIndex = 10000;
        video.play();
}

videoButtonPlay.addEventListener('click',videoPlay);

priceType.addEventListener('click',(event) => {
    switchActive(event);
});

function switchActive(event){
    if(selectedButton !== event.target){
        selectedButton.classList.remove('button_active');
        selectedCard.classList.remove('active');
        selectedButton = event.target;
        selectedCard = document.querySelector(`.${selectedButton.getAttribute('data-time')}`);
        selectedButton.classList.add('button_active');
        selectedCard.classList.add('active');
    }
}