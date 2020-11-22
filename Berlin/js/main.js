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
        video.setAttribute('controls','controls')
}

videoButtonPlay.addEventListener('click',videoPlay);

priceType.addEventListener('click',(event) => {
    let target = event.target;

    if(!target.classList.contains('button__price-type')){
        return;
    }
    switchActive(target);
});

function switchActive(target){
    if(selectedButton !== target){
        selectedButton.classList.remove('button_active');
        selectedCard.classList.remove('active');
        selectedButton = target;
        selectedCard = document.querySelector(`.${selectedButton.getAttribute('data-time')}`);
        selectedButton.classList.add('button_active');
        selectedCard.classList.add('active');
    }
}

const buttonStart =  document.querySelectorAll('.button-link');
for(let link of buttonStart){
    link.addEventListener('click',(event) => {
        event.preventDefault();
        const blockId = link.getAttribute('href');
        
        document.querySelector(blockId).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
    });
}