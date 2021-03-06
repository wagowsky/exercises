// # Nests

// #### 1. 2D Array
// * Given the 2D Array below, **loop** through the arrays to print the values.

// ```javascript
// let board = [
//   [1, 2, 3],
//   ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
//   [true, false]
// ];
// // ```



console.log(`========================1=======================`);

let board = [
    [1, 2, 3],
    ["quick", "brown", "fox", "jumped", "over", "lazy", "dog"],
    [true, false]
];




for (subArray in board) {
    for (keys in board[subArray]) {
        console.log(board[subArray][keys]);
    }
}


console.log(`========================1=======================`);

// #### 2. Doggo
// * 2.1 Create a doggo object. Add name and breed as properties of the object.
// * 2.2 Create an array within the doggo object named favorite foods and add the doggo's favorite foods to the array.
// * 2.3 Access the second element of the doggo's favorite foods. 
// * 2.4 Add a method that loops through and print all the doggo's favorite food.
console.log(`========================2=======================`);
const doggo = {
    name: 'Ubul',
    breed: 'yellow dog',
    favouriteFoods: ['pizza', 'ribs', 'chicken'],
    doggoFood: function () {
        for (keys in this.favouriteFoods) {
            console.log(this.favouriteFoods[keys])

        }
    }
}


console.log(doggo.favouriteFoods[1]);
console.log(`================loop==================`)

doggo.doggoFood()
console.log(`========================2=======================`);
// #### 3. 
// * 3.1 Create an object called recipes.
// * 3.2 Inside this object, you should create another object for ingredients and store ingredients as properties butter, sugar, flour etc. Each property should have a string as its value. 
// * 3.3 Without changing the previous code, add another ingredient - let's add `ginger`. 
// * 3.4 Change the ingredient `sugar` to `brown sugar`. 
// * 3.5 Write a method in the recipes object that prints the value of each ingredient in the ingredients object. 

console.log(`========================3=======================`);

const recipes = {
    ingredients: {
        butter: 'fatty',
        sugar: 'sweet',
        flour: 'white'
    },
    printIngriedents: function () {
        for (keys in this.ingredients) {
            console.log(this.ingredients[keys]);
        }
    }

};

console.log(recipes);
console.log(`========addGinger=========`);
recipes.ingredients.ginger = 'spicy';

console.log(recipes);
console.log(`========sugarToBrownSugar=========`);
recipes.ingredients.sugar = 'brown sugar';
console.log(recipes);


/* for (keys in recipes.ingredients) {

    console.log(recipes.ingredients[keys]);
} */

console.log(`========printValuesOfIngredients=========`);
recipes.printIngriedents();

console.log(`========================3=======================`);





/* 
findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

findLargestNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]]) ➞ [-34, -2, 7]

findLargestNums([[0.4321, 0.7634, 0.652], [1.324, 9.32, 2.5423, 6.4314], [9, 3, 6, 3]]) ➞ [0.7634, 9.32, 9]




 */


const findLargestNums = (array) => {
    let empty=[];
    for (let shortArrays in array) {
        
        empty.push(Math.max(...array[shortArrays]))
    }
return empty;
}

console.log(findLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]));