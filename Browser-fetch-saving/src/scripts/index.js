// The following line makes sure your styles are included in the project. Don't remove this.
import '../styles/main.scss';
import 'babel-polyfill';


import {
    client
} from './apiCall.js'
import {
    view
} from './view.js'
console.log(view)
console.log(client)
// // Import any additional modules you want to include below \/



 let user = new client();


let list = new view();
// // \/ All of your javascript should go here \/

const save = document.querySelector(".btn-save");
const reset = document.querySelector(".btn-reset");

list.displayMovieOnPage(){

user.getMovieData()
.then(response =>Object.keys(response))
     .then(list.displayMovieOnPage(user.title));
}


save.addEventListener("click",list.displayMovieOnPage)
reset.addEventListener("click",list.removeDisplay);




// JULIA


// // The following line makes sure your styles are included in the project. Don't remove this.
// import '../styles/main.scss';
// import 'babel-polyfill';
// // Import any additional modules you want to include below \/
// import { Client } from './apiCall.js';
// import { View } from './view.js';
// // \/ All of your javascript should go here \/
// const client = new Client();
// const view = new View();

// const inputData = document.querySelector('input');
// const buttonSave = document.querySelector('.btn-save');
// const buttonReset = document.querySelector('.btn-reset');
// let arrayOfStorage = [];

// async function save() {
//     console.log(inputData.value);
//     arrayOfStorage = JSON.parse(localStorage.getItem('movies'));
//     if (arrayOfStorage && arrayOfStorage.includes(inputData.value)) {

//         alert("You already have it");

//     } else {

//         const savedData = await client.getMovieData(inputData.value);
//         view.displayMovieOnPage(savedData);
//         if (arrayOfStorage === null) {
//             arrayOfStorage = [];
//         }
//         arrayOfStorage.push(inputData.value);
//         localStorage.setItem('movies', JSON.stringify(arrayOfStorage));


//     }
// }


// function reset() {
//     view.removeDisplay()
//     localStorage.clear();
// }

// async function saveData() {
//     arrayOfStorage = JSON.parse(localStorage.getItem('movies'));
//     if (arrayOfStorage) {
//         for (let i = 0; i < arrayOfStorage.length; i++) {
//             const savedData = await client.getMovieData(arrayOfStorage[i]);
//             view.displayMovieOnPage(savedData);
//         }
//     }


// }

// buttonReset.addEventListener("click", reset);
// buttonSave.addEventListener("click", save);
// document.addEventListener('DOMContentLoaded', saveData);