let share = document.querySelectorAll('.share-button');

share.forEach(shareSelected);

function shareSelected(item){
    item.addEventListener('click', function(){
        let shareBlock = document.querySelector('.share-block');

        shareBlock.classList.toggle('share-block-visible');
    })
}