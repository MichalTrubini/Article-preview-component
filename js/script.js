let shareButton = document.querySelectorAll('.share-button');
let share = document.querySelector('.content__wrapper-image');
let arrow = document.querySelector('.content__share-button');
let shareBlock = document.querySelector('.share-block');

share.addEventListener('mouseenter',hoverEffectOn);
share.addEventListener('mouseleave',hoverEffectOff);
shareButton.forEach(shareSelected);

function shareSelected(item){
    item.addEventListener('click', function(){
        shareBlock.classList.toggle('share-block-visible');
    })
}

function hoverEffectOn(){
    if (shareBlock.classList.contains('share-block-visible')) return;
    share.classList.add('content__wrapper-image-hover');
    arrow.classList.add('content__share-button-hover');
}

function hoverEffectOff(){
    if (shareBlock.classList.contains('share-block-visible')) return;
    share.classList.remove('content__wrapper-image-hover');
    arrow.classList.remove('content__share-button-hover');
}