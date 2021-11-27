let shareActive = $('.share-active');
let shareButton = $('.author__share-button');
let authorBlock = $('.author');
let buttonActive = $('.share-active__share-button-active');
let hoverButton = $('.share-hover');
let tooltip = $('.share-active-hover');

shareActive.hide();

shareButton.on('click', function(event) {

    if ($(window).width() < 800) {
    event.preventDefault();

    authorBlock.hide();
    shareActive.show();
    }
})

buttonActive.on('click', function(event) {
    event.preventDefault();

    if ($(window).width() < 800) {
    shareActive.hide();
    authorBlock.show();
    }
})

hoverButton.on('mouseover', function(){
    if ($(window).width() > 800) {
    tooltip.css('visibility','visible');
    }
})

hoverButton.on('mouseleave', function(){
    if ($(window).width() > 800) {
    tooltip.css('visibility','hidden');
    }
})
