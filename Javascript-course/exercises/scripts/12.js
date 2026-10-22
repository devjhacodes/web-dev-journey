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
    setTimeout(() => button.innerHTML = 'Finished', 1000);
}

document.querySelector('.js-start-btn').addEventListener('click', () => {
    autoPlay();
});
*/


// 12e & 12f
/*
let timeoutId;
function addedMessage(){
    const button = document.querySelector('.js-message-btn');
    button.innerHTML = 'Added';
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => button.innerHTML = '', 2000);
}

document.querySelector('.js-addtocart-btn').addEventListener('click',()=>{
    addedMessage();
});
*/

// 12j
/*
const multiply = (a,b) => {
    return a*b;
};
*/

// 12k
/*
const multiply = (a,b) => a*b;

console.log(multiply(2,3));
console.log(multiply(7,10));
*/

// 12i
/*
function countPositive(nums){
    let greaterNum = 0;
    nums.forEach((num) => {
        if (num > 0){
            greaterNum ++;
        }else{

        }
    });
    return greaterNum;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2,3,-5,7,10]));
*/

// 12 m
/*
function addNum(array,num){
    return array.map((value) => value + num);
}

console.log(addNum([1,2,3],2));
console.log(addNum([-2,-1,0,99],2));
*/

// 12n
/*
function removeEgg(foods){
    return foods.filter((value) => value !== 'egg');
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));
*/

// 12o
/*
function removeEgg(foods){
    let eggsRemoved = 0;
    return foods.filter((food) => {
        if(food === 'egg' && eggsRemoved < 2){
            eggsRemoved ++;
            return false;
        }
        return true;
    });
}

console.log(removeEgg(['egg','apple','egg','egg','ham']));
*/
