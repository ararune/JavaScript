/* return a string with only the unique characters*/
function extractUnique(str){
    str = str.split("");
    str = new Set(str);
    str = [...str].join("");

    return str;
}
console.log(extractUnique('thequickbrownfoxjumpsoverthelazydog'));
/* generate all combinations of a string */
let generateCombinations = (str) =>{
    let combinations = [];
      for(let i = 0 ; i < str.length; i++)
    {
        for(let j = i + 1; j< str.length + 1; j++)
        {
            combinations.push(str.slice(i , j));
        }
    }
    combinations.push(str[0]+str[str.length - 1])
   return combinations;
}
console.log(generateCombinations('tule'));

/* use fetch api to display all posts, each post is an element in unordered list*/
const url = 'https://jsonplaceholder.typicode.com/posts';

function show(data) {
    let tab = 
        `<ol>Posts<br><br>`;
    
    // Loop to access all rows 
    for (let r of data) {
        tab += `<li> Post : ${r.title} <br>Body : ${r.body}</li><br>`;
    }
    tab += '</ol>'
    // Setting innerHTML as tab variable
    document.getElementById("posts").innerHTML = tab;
}


function fetchFunction(url){
    fetch(url)
        .then(response => response.json())
        .then(data => {
            show(data);
        })
}
fetchFunction(url);


/* // Defining async function
async function getApi(url) {
    
    // Storing response
    const response = await fetch(url);
    
    // Storing data in form of JSON
    var data = await response.json();
    show(data);
} */
// Calling that async function


/* getApi(url); */