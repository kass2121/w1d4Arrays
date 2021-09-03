"use strict";

/* You need the module.exports when testing in node. 
 Comment it out when you send your file to the browser
 */
module.exports = {
    maxOfThree,
    sum,
    multiply,
    findLongestWord,
    reverseArray,
    reverseArrayInPlace,
    scoreExams

};
//-------------------------------#1---------------------------------------
//add all of your function names here that you need for the node mocha tests

/**
 * 
 * @param {number} a is a number
 * @param {number} b is a number 
 * @param {number} c is a number
 * @returns {number} largest of a, b, c
 */
function maxOfThree(a, b, c) {
    let max = 0;

    if (a > b && a > c) {
        max = a;
    } else if (b > a && b > c) {
        max = b;
    } else {
        max = c;
    }
    return max;
}
//end
//------------------------------#2/1------------------------------
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} sum of arr numbers
 */
function sum(arr) {
    let result = 0;
    for (const number of arr) {
        result += number;
    }
    return result;
}
//end

//-------------------------------#2/2---------------------------------
/**
 * 
 * @param {Array} arr of numbers
 * @returns {number} multiplication of arr numbers
 */
function multiply(arr) {
    let result = 1;
    for (const number of arr) {
        result *= number;
    }
    return result;
}
//end
//---------------------------------#3-----------------------------------
/*
*3.	Write a function findLongestWord() that takes an
 array of words and returns the length of the longest one. 
*/
/**
 * 
 * @param {Object} stringArray  is input array
 * @returns {number} the longest word length
 */
function findLongestWord(stringArray) {
    let longestWord = 0;
    for (let i = 0; i < stringArray.length; i++) {

        if (stringArray[i].length > longestWord) {
            longestWord = stringArray[i].length;
        }
    }
    return longestWord;

}
console.log(findLongestWord(["Kassaw", "Ayalew", "Ethiopian"])); //9
//end

//-------------------------------#4-----------------------------------
/**
 * 
 * @param {Object} orginalArray is orginal array
 * @returns {Object}  return reversed array 
 */
function reverseArray(orginalArray) {
    let rArray = [];
    for (i = orginalArray - 1; i >= 0; i--) {
        rArray.push(orginalArray[i]);
    }

    return rArray;

}
//end
//-------------------------------------------------------------------------
/**
 * 
 * @param {Object} ar2r is orginal array
 * @returns {Object}  return reversed array
 */
function reverseArrayInPlace(orginalArray) {
    for (let i = 0; i < Math.floor(orginalArray.length / 2); i++) {
        let tempArray = orginalArray[i];
        orginalArray[i] = orginalArray[array.length - 1 - i];
        orginalArray[orginalArray.length - 1 - i] = tempArray;
    }

}
let orginalArray = [1, 2, 3, 4, 5];
reverseArrayInPlace(orginalArray);
console.log(orginalArray);
//end

//----------------------------------#5----------------------------------
/**
 * 
 * @param {Object} studentAnswers  
 * @param {Object} correctAnswers 
 */
function scoreExams(studentAnswers, correctAnswers) {
    let counter = 0;
    for (let i = 0; i < studentAnswers.length; i++) {
        for (let j = 0; j < studentAnswers[i].length; j++) {
            for (let k = 0; k < correctAnswers.length; k++) {

                if (correctAnswers[k] == studentAnswers[i][j]) {
                    counter++;
                }
            }


        }
        console.log( counter)


    }
    
}
