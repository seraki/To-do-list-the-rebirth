// Import stylesheets
import './style.css';

// Write TypeScript code!
const appDv: HTMLElement = document.getElementById('app');
appDv.innerHTML = `<h1> Mimi is here to stay </h1>`;

/*const list : HTMLElement = document.getElementById('myList');
list.innerHTML = `<h1> am here </h1>`;*/

let myList: string[] = [];

let name:string  = 'Mimi';

myList.push(name);
console.log(myList);


