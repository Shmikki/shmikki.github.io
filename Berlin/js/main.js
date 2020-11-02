const headerLocal = document.querySelector(".header"),
videoButtonPlay = document.querySelector('.button-video'),
helpSucsessContent = document.querySelector('.helpSuccessful-content'),
video = document.querySelector('.video'),
priceType = document.querySelector('.price-type'),
selectedPlan = {
    button : document.querySelector('.button_active'),
    card : document.querySelector('.yearly'),
    switchButton: function(event){
        this.button = event.target;
    },
    switchCard: function(){
        this.card = document.querySelector(`.${this.button.getAttribute('data-time')}`);
    },
    remove:function(){
        this.button.classList.remove('button_active');
        this.card.classList.remove('active');
    },
    add:function(){
        this.button.classList.add('button_active');
        this.card.classList.add('active');
    }
};

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
    if(selectedPlan.button != event.target){
        selectedPlan.remove();
        selectedPlan.switchButton(event);
        selectedPlan.switchCard();
        selectedPlan.add();
    }
}
