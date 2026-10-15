// 12a & 12b
/*
const add = function (){
    console.log(2+3);
};

add();
add();

function runTwice(fun){
    fun();
    fun();
}
runTwice(function() {
        console.log('12b');
    });
runTwice(add);
*/

// 12c & 12d
/*
function autoPlay(){
    const button = document.querySelector('.js-start-btn');
    button.innerHTML = 'Loading...';
    setTimeout(function(){
        button.innerHTML = 'Finished';
    }, 1000);
}
*/

// 12e & 12f
let timeoutId;
function addedMessage(){
    const button = document.querySelector('.js-message-btn');
    button.innerHTML = 'Added';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(function(){
        button.innerHTML = '';
    }, 2000);
}




