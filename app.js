//Ustoz bergan masalalar

// 1-masala

{
    function getPositiveNumbers(arr) {
    return arr.filter(number => number > 0);
}


const numbers = [-3, 5, 0, -2, 8, 10, -1];
const positiveNumbers = getPositiveNumbers(numbers);

console.log(positiveNumbers); 
}

// 2-masala

{
    function capitalizeFirstLetter(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1); 
    }
    
    function capitalizeWords(str) {
        return str
            .split(" ") 
            .map(word => capitalizeFirstLetter(word)) 
            .join(" ");
    }
    

    const sentence = "salom dunyo! qanday ishlar?";
    const resultSentence = capitalizeWords(sentence);
    
    console.log(resultSentence);
}

// 3-masala

{
    function reverseNumber(num) {
        
        return Number(num.toString().split("").reverse().join(""));
    }
    
   
    const number = 12345;
    const reversedNumber = reverseNumber(number);
    
    console.log(reversedNumber);
}

// 4-masala

{
    function getFalseValues(arr) {
        return arr.filter(value => value === false);
    }
    
   
    const array = [true, false, 0, false, true, "false", null, false];
    const falseValues = getFalseValues(array);
    
    console.log(falseValues); 
}

// 5-masala

{
    function sumPositiveNumbers(arr) {
        return arr
            .filter(num => num > 0)
            .reduce((sum, num) => sum + num, 0);
    }
    
   
    const numbers = [-3, 5, 0, -2, 8, 11, -1];
    const sum = sumPositiveNumbers(numbers);
    
    console.log(sum);
}




//Codewars

// 1-masala

{
    function multiply(a, b){
        return a * b
      }
}
  
// 2-masala

{
    function evenOrOdd(number) {
        return number % 2 === 0 ? "Even" : "Odd";
    }
    
    console.log(evenOrOdd(4));
    console.log(evenOrOdd(7));
}

// 3-masala

{
    function numberToString(num) {
        return num.toString();
    }
    
    console.log(numberToString(123));
    console.log(numberToString(-100));
}

// 4-masala

{
function solution(str) {
    return str.split("").reverse().join("");
}


console.log(solution("world")); 
console.log(solution("word"));  
}

// 5-masala

{
    function makeNegative(num) {
        return num > 0 ? -num : num; 
    }
    
    console.log(makeNegative(1));
    console.log(makeNegative(-5));
    console.log(makeNegative(0)); 
    console.log(makeNegative(0.12)); 
}

// 6-masala

{
    function opposite(num) {
        return -num;
    }
    
    console.log(opposite(-1)); 
    console.log(opposite(14)); 
    console.log(opposite(-34)); 
}

// 7-masala

{
    function boolToWord(bool) {
        return bool ? "Yes" : "No";
    }
    
    console.log(boolToWord(true)); 
    console.log(boolToWord(false)); 
}

// 8-masala

{
    function sumPositiveNumbers(arr) {
        return arr.filter(num => num > 0)
                  .reduce((sum, num) => sum + num, 0);
    }
    

    console.log(sumPositiveNumbers([1, -4, 7, 12]));
    console.log(sumPositiveNumbers([-1, -2, -3])); 
    console.log(sumPositiveNumbers([0, 3, 5, 6])); 
}

// 9-masala

{
    function repeatStr(n, s) {
        return s.repeat(n);
    }
    
    console.log(repeatStr(6, "I")); 
    console.log(repeatStr(5, "Hello"));
}

// 10-masala

{
    function squareSum(numbers) {
        return numbers.reduce((sum, num) => sum + num ** 2, 0);
    }
    
    // Examples
    console.log(squareSum([1, 2, 2]));  // 9
    console.log(squareSum([1, 2, 3]));  // 14
    console.log(squareSum([4, 5, 6]));  // 77
}

