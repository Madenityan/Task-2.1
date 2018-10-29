/*
Дан масив чисел, которые представляют собой показатели высоты скал: [2,1,5,0,3,4,7,2,3,1,0]
(для примера дан этот масив, но может быть любой, Ваш алгоритм должен решать все случаи)
Посчитать количество воды (количество синих йчеек), набранной в ямы после дождя.
Нужно по возможности использовать методы массива, а не обычные цыклы.
Например, в даном примере правильный ответ: 10	*/

/*﻿Some cases:
// [2, 5, 1, 3, 1, 2, 1, 7, 7, 6]; // 17
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0]; // 10
// [7, 0, 1, 3, 4, 1, 2, 1] // 9
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 0] // 10
// [2, 2, 1, 2, 2, 3, 0, 1, 2] // 4
// [2, 1, 5, 0, 3, 4, 7, 2, 3, 1, 8] // 24
// [2, 2, 2, 2, 2] // 0*/

arrFirst = [2, 5, 1, 3, 1, 2, 1, 7, 7, 6];

function findMaxNum(array) {
    let maxNum = 0;
    let index = 0;

    for (let i = 0; i < array.length; i++) {
        if (maxNum < array[i]){
            maxNum = array[i];
            index = i;
        }
    }

    return {
        maxNum: maxNum,
        index: index
    };
}

let max = findMaxNum(arrFirst);

let newArrayRight = arrFirst.slice(max.index + 1);
let newArrayLeft = arrFirst.slice(0, max.index);

let rightMax = findMaxNum(newArrayRight);

let leftMax = findMaxNum(newArrayLeft);

function sumWater(array, startIndex = 0, maxValue, finishIndex) {
    let sum = 0;
    let water = 0;

    for (let i = startIndex; i < finishIndex; i++) {
        water = maxValue - array[i];
        sum = sum + water;
    }

    return sum;
}

let allWater = sumWater(newArrayLeft, leftMax.index, leftMax.maxNum, newArrayLeft.length);
allWater = allWater + sumWater(newArrayRight, 0, rightMax.maxNum, rightMax.index);

console.log(allWater);




















