console.log(` Write a program to add up the numbers 1 to 20.`);
console.log(``);
console.log(``);
console.log(`========================`);
console.log(``);
console.log(`========================`);




console.log(`2. **There are i bottles of beer on the wall.** 
// Write a program that will output, "There is one bottle of beer on the wall." "There are two bottles of beer on the wall" up until there are five bottles. `);
console.log(`========================`);
console.log(``);
console.log(``);

// let i=1;
// let text=`There is ${i} bottle of beer on the wall`;
// console.log(text);

for (let i = 1; i <= 5; i++) {

    let text = `There is one bottle of beer on the wall`;

    if (i === 2) {
        text = `There are two bottles of beer on the wall`;
    } else if (i === 3) {
        text = `There are three bottles of beer on the wall`;
    } else if (i === 4) {
        text = `There are four bottles of beer on the wall`;
    } else {
        text = `There are five bottles of beer on the wall`;
    }
    console.log(text);
}


// while( i<5){
//     i++;
//     if(i>1){
//         text=`There are ${i} bottles of beer on the wall`;
//     }

//     console.log(text);
// }




console.log(``);
console.log(`========================`);





console.log(`3. **The odd/even reporter.**
// Write a program that will iterate from 0 to 20. For each iteration, it will check if the current number is even or odd, and report that to the screen (e.g. "2 is even").`);
console.log(`========================`);
console.log(``);
console.log(``);





for (let myNumber = 0; myNumber <= 20; myNumber++) {

    let odd = `${myNumber} is odd`;
    let even = `${myNumber} is even`;
    if (myNumber % 2) {
        console.log(odd);

    } else {
        console.log(even);
    }

}

console.log(``);
console.log(`========================`);






console.log(`4. **Multiplication Tables.**
// Write a program that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and log the result (e.g. "2 * 9 = 18").
// **Bonus:** Use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total).
`);
console.log(`========================`);
console.log(``);
console.log(``);
for (let x = 1; x <= 10; x++) {

    //BONUS TASK
    console.log(`bonus task`);
    for (let w = 1; w <= 10; w++) {

        w2 = x * w;

        console.log(`   ${x} * ${w} = ${w2}`);


    }
    console.log(`bonus task`);
    //BONUS TASK


    let y = x * 9;
    console.log(`main task`);
    console.log(`${x} * 9 = ${y}`);
    console.log(`main task`);

}

console.log(``);
console.log(`========================`);







console.log(` 5. **Fizz Buzz**
// Write a program which iterates the integers from 1 to 100. But for multiples of three print "Fizz" instead of the number and for the multiples of five print "Buzz". For numbers which are multiples of both three and five print "FizzBuzz".`);
console.log(`========================`);
console.log(``);
console.log(``);

for (let z = 1; z <= 100; z++) {

    if ((z % 3 === 0) && (z % 5 === 0)) {
        console.log(`FizzBuzz`);
    } else if (z % 3 === 0) {
        console.log(`Fizz`);
    } else if (z % 5 === 0) {
        console.log(`Buzz`);
    } else {
        console.log(z);
    }

}

console.log(``);
console.log(`========================`);






console.log(`6. **Sum of Multiples**
// Write a program to add the multiples of 3 and 5 under 1000.`);
console.log(`========================`);
console.log(``);
console.log(``);

let sum = 0;

for (let start = 1; start <= 1000; start++) {

    if (start % 15 === 0) {


        sum = start + sum;

    }

}
console.log(sum);






console.log(``);
console.log(`========================`);






console.log(`7. Write programs that produce the following outputs: 
// >100 200 300 400 500 600 700 800 900 1000
// >
// >1 2 4 8 16 32 64 128
// >
// >0 2 4 6 8 10
// >
// >3 6 9 12 15
// >
// >9 8 7 6 5 4 3 2 1 0
// >
// >1 1 1 2 2 2 3 3 3 4 4 4
// >
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);
console.log(`========================`);
console.log(``);
console.log(``);

console.log(`>`);
for (let n1 = 0; n1 < 1000;) {
    n1 = n1 + 100

    console.log(n1);
}
console.log(`>`);
console.log(`>`);
for (let n1 = 1; n1 <= 128;) {
    console.log(n1);
    n1 = n1 + n1;


}


console.log(`>`);
console.log(`>`);
for (let n1 = 0; n1 <= 10;) {
    console.log(n1);
    n1 = n1 + 2;


}

console.log(`>`);
console.log(`>`);
for (let n1 = 3; n1 <= 15;) {
    console.log(n1);
    n1 = n1 + 3;


}

console.log(`>`);
console.log(`6`);
for (let n1 = 9; n1 >= 0;) {
    console.log(n1);
    n1 = n1 - 1;


}
//Create a for loop that prints the following:  >1 1 1 2 2 2 3 3 3 4 4 4;
console.log(`>`);
console.log(`>`);
// for (let n1 = 1; n1 < 5; n1++) {

//     console.log(n1);
//     console.log(n1);
//     console.log(n1);


// }


let count = 0;
for (let i = 1; i <= 4;) {

    if ((count !== 0) && (count % 3 === 0)) {
        i++;

    }
    console.log(i);
    count++;
}




console.log(`777777>`);
// >0 1 2 3 4 0 1 2 3 4 0 1 2 3 4`);



for (let number = 0; number <= 4; number++) {
    if (count >= 0 && count <= 4) {
        console.log(number)

    }
    count++
}



console.log(`8. **isPalindrome.**
// Write a program to check whether a word is a palindrome or not. 
// Note: a palindrome is a word, phrase, or sequence that reads the same backwards as forwards, e.g. madam or tarrattarrat`);
console.log(`========================`);
console.log(``);

console.log(``);


let name = "DCI";
console.log(name);



let l1 = name.substring(0, 1);
let l2 = name.substring(1, 2);
let l3 = name.substring(2, 3);
let l4 = name.substring(3, 4);
let l5 = name.substring(4, 5);
let l6 = name.substring(5, 6);
let l7 = name.substring(6, 7);
let l8 = name.substring(7, 8);
let l9 = name.substring(8, 9);
let l10 = name.substring(9, 10);
let l11 = name.substring(10, 11);
let l12 = name.substring(11, 12);
let l13 = name.substring(13, 14);
let l14 = name.substring(14, 15);
let l15 = name.substring(16, 17);
let l16 = name.substring(17, 18);

let reverse = l16 + l15 + l14 + l13 + l14 + l12 + l11 + l10 + l9 + l8 + l7 + l6 + l5 + l4 + l3 + l2 + l1;
console.log(reverse);
console.log(name === reverse ? 'they match' : 'they dont match');






console.log(`========================`);







// let str = "";


// let reversed = str.toLowerCase().split("").reverse().join("");


// console.log(reversed);



// if (reversed === str) {
//     console.log(`It is a palindrome`)
// } else {
//     console.log(`It is not a palindrome`)
// }









console.log(`========================`);
let str = "madam";


// let firstCharacterCount = 0;
// for (let characterCount = str.length; characterCount >= 0; characterCount--) {

//     console.log(firstCharacterCount);
//     let first = str.charAt(firstCharacterCount);


//     let lastCharacter = str.charAt(characterCount);
//     console.log(`last : ${lastCharacter}`);

//     let remain = str.substring(str.length, 0);
//     console.log(remain);

//     let reversed = lastCharacter + remain;
//     console.log(reversed)
// }

let reversed = '';
for (let m = 1; m <= str.length; m++) {

    reversed += str.charAt(str.length - m);
    console.log(reversed);

}
if (reversed === str) {
    console.log('It is a palindrome')
} else {
    console.log('It is not a palindrome')
}




// let firstCharacterCount = 0;
// for (let characterCount = str.length; characterCount >= firstCharacterCount; characterCount--) {
//     str = str.toLowerCase();
//     //  console.log(characterCount)
//     //  console.log(firstCharacterCount)
//     let firstCharacter = str.charAt(firstCharacterCount);
//     let lastCharacter = str.charAt(characterCount - 1);
//     //  console.log('last character: ' + lastCharacter);
//     //  console.log('first character: ' + firstCharacter);
//     firstCharacterCount++;
//     // console.log(firstCharacterCount)

//     if ((firstCharacter !== lastCharacter) && (characterCount <= firstCharacterCount)) {
//         console.log(` not a palindrome`)
//     } else if (characterCount <= firstCharacterCount) {

//         console.log(`it is a palindrome`)
//     }
// }









// Write a program that outputs: 9 7 5 3 1;


for (let num = 9; num >= 0; num -= 2) {
    console.log(num);


}

// "Peter Picker picked pickles" isAllitaretion?


// let sentence = "Peter Picker picked pickles";

// console.log(sentence);

// for (let startIndex=0;startIndex<=sentence.length-1;startIndex++) {
//     firstChar = sentence.charAt(startIndex) //the first character of the sentence


//     let otherChar=firstChar;// the character we compare to the first character( first character of the next word



//     sentence = sentence.toLowerCase();// turns the sentence into lowercase , so we can look for similarities

//     for(let space=sentence.search(" "); space>=sentence.length;){ // searches for the position of the first "SPACE" in the sentence, loop runs until it had looked for spaces across the whole word


//     let remain =sentence.substr(space+1); 
//     //cuts the first word off including the first space, so we could potentially repeat the previous search for the "new first SPACE" (The one after the 2nd word)

//             startIndex=remain.search(" ");// Was hoping to search for the next new space,  but it did not work out






//     }
//     console.log(startIndex)


// }



//===========================================================================================
let sentence = "Peter Picker picked pickles pickle";
sentence = sentence.toLowerCase();
lastSpace = sentence.lastIndexOf(" ");
sentenceFirstLetter = sentence.charAt(0)
lastWordFirstLetter = sentence.charAt(lastSpace + 1);

console.log(lastSpace);
spaceOne = sentence.indexOf(" ");
console.log(spaceOne);
otherSpaces = sentence.indexOf(" ", spaceOne + 1);




for (let spaces = sentence.indexOf(" "); spaces <= lastSpace; spaces++) {

    // var str = "food",
    // index1 = str.indexOf("o"),
    // index2 = str.indexOf("o", index1+1);


    otherSpaces = sentence.indexOf(" ", spaces + 1);
    if (sentenceFirstLetter === lastWordFirstLetter) {
        console.log(`could be an alliteration`);
    } else {
        console.log('not an alliteration')
    }


    // console.log(spaces);

}





//  let remain =sentence.substr(space+1);

//    console.log(remain)
//   let nextSpace=remain.indexOf(' ');

//   console.log(nextSpace)
//   remain2=remain.substr(nextSpace+1);
//   console.log(remain2)

//   let nextSpace2=remain2.indexOf(' ');
//   console.log(nextSpace2)
//   remain3=remain2.substr(nextSpace+1);
//   console.log(remain3)













// //===============================================================================
// //let sentence = "Peter Picker picked pickles";
// let sentence = `jdss jdkjn jdgkn jdhfudh jbsvdvfdvdv`;
// sentence = sentence.toLowerCase();
// console.log(sentence);
// let firstLetter = sentence.charAt(0);
// //console.log(`firstletter:${firstLetter}`)
// let alliteration;

// let lastSpaceindex = sentence.lastIndexOf(' ');
// for (let firstSpaceIndex = sentence.indexOf(' '); firstSpaceIndex <= lastSpaceindex; firstSpaceIndex++) {
//     //console.log(firstSpaceIndex)
//    // console.log(lastSpaceindex)
//     let nextLetter = sentence.charAt(firstSpaceIndex + 1)
//   //  console.log(`${nextLetter} at ${firstSpaceIndex}`)
//   //  console.log(`Is ${firstLetter} matching ${nextLetter}?`)
//   //  console.log(`Is ${firstLetter} matching ${nextLetter} ?`)
//     if (firstLetter === nextLetter) {
//         alliteration = true;
//     } else {
//         alliteration = false;
//     }

// }
// if (alliteration) {
//     console.log(`It is an alliteration`)
// } else {
//     console.log(`It is not an Alliteration `)

// }



let isAllitaretion = false;
const input = "Peter Picker picked pickles";
const myString = input.toLowerCase().trim();
const firtsChar = myString.charAt(0);



for (let nextSpace = myString.indexOf(' '); nextSpace != -1;  nextSpace = myString.indexOf(' ', nextSpace + 1)) {

    console.log(nextSpace);
 if (firtsChar === myString.charAt(nextSpace + 1)) {
        isAllitaretion=true;
        console.log(`It's a match! It could be an alliteration`);
    }else{
        isAllitaretion=false;
        console.log(`It's not an alliteration`);
        break;
    }
   
}

console.log(`Your sentence: ${input} is an Allitaretion : ${isAllitaretion}`);