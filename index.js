// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(variable){
    return cats.push(variable);
}


function destructivelyPrependCat(variable){
    return cats.unshift(variable)
}

function destructivelyRemoveLastCat(){
    return cats.pop();
}

function destructivelyRemoveFirstCat(){
    return cats.shift();
}

function appendCat(variable){
    let newArray = [...cats];
    newArray.push(variable);
    return newArray;
}

function prependCat(variable){
    let newArray = [...cats];
    newArray.unshift(variable);
    return newArray;
}

function removeLastCat(){
    let newArray = [...cats];
    newArray.pop();
    return newArray;
}

function removeFirstCat(){
    let newArray = [...cats];
    newArray.shift();
    return newArray;
} 