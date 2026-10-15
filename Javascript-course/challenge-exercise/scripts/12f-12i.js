// 12f
let timeoutId;
function addedMessage(){
    const button = document.querySelector('.js-message-btn');
    button.innerHTML = 'Added';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
        button.innerHTML = '';
    }, 2000);
}