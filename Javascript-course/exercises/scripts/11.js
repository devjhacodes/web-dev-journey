// 11a
/*
const nums = [10, 20, 30];
nums[2] = 99;

console.log(nums);
*/

// 11b
/*
function getLastValue(array){
    const lastIndex = array.length - 1;
    return array[lastIndex];
}

console.log(getLastValue(['hi','hello','good']));
*/

//11c
/*
function arraySwap(array){
    const lastIndex = array.length -1;

    const lastValue = array[lastIndex];
    const firstValue = array[0];

    array[0] = lastValue;
    array[lastIndex] = firstValue;

    return array;
}
console.log(arraySwap([1,20,22,24,5]));
console.log(arraySwap(['hi', 'hello', 'hey']))
*/

// 11d
/*
for (let i = 0; i <= 10 ; i += 2){
    console.log(i)
}
*/

// 11e
/*
for (let i = 5; i >= 0; i -= 1){
    console.log(i);
}
*/

// 11f
/*
let i = 0;
while(i <= 10){
    console.log(i)
    i += 2;
}

i = 5;
while(i >= 0){
    console.log(i);
    i -= 1;
}
*/

// 11g
/*
const nums = [1,2,3];

for(let i = 0; i < nums.length; i++){ 
    nums[i] += 1;
}
console.log(nums);
*/

// 11h
/*
function addOne(array){

    for(let i = 0; i < array.length; i++){ 
        array[i] += 1;
    }
    console.log(array);
}

addOne([1,2,3]);
addOne([-2,-1,0,99]);
*/

// 11i
/*
function addNum(array,num){
    for(let i = 0; i < array.length; i++){
        array[i] += num;
    }
    console.log(array);
}

addNum([1,2,3],2);
addNum([1,2,3],3);
addNum([-2,-1,0,99],2);
*/

// 11j
/*
function addArrays(array1,array2){
    for(let i = 0; i < array1.length; i++){
        array1[i] += array2[i];
    }
    console.log(array1);
}

addArrays([1,1,2],[1,1,3]);
addArrays([1,2,3],[4,5,6]);
*/

// 11k
/*
function countPositive(nums){
    let result = 0;

    for(let i = 0; i < nums.length; i++){
        if (nums[i]>0){
            result ++;
        }
    }
    return result;
}

console.log(countPositive([1,-3,5]));
console.log(countPositive([-2, 3, -5, 7, 10]));
*/

// 11l
/*
function minMax(nums){
    const result = {
        min: null,
        max: null
    };

    for(let i = 0; i < nums.length; i++){
        const value = nums[i];

        if(result.min === null || value < result.min){
            result.min = value;
        }

        if (result.max === null || value > result.max){
            result.max = value;
        }
    }
    return result;
}

console.log(minMax([1, -3, 5]));
console.log(minMax([-2, 3, -5, 7, 10]));

console.log(minMax([]));
console.log(minMax[3]);
*/

// 11n

function countWords(words) {
        const result = {};

        for (let i = 0; i < words.length; i++) {
          const word = words[i];

          if (!result[word]) {
            result[word] = 1;
          } else {
            result[word]++;
          }
        }

        return result;
      }

console.log(countWords(['apple', 'grape', 'apple', 'apple']));