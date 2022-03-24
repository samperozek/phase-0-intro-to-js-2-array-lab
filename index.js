// Write your solution here!
const cats = [
    "Milo",
    "Otis",
    "Garfield",
];
let copyCats = [];
function destructivelyAppendCat(name) {
    cats.push(name);
};
function destructivelyPrependCat(name) {
    cats.unshift(name);
};
function destructivelyRemoveLastCat(name){
    cats.pop(name);
};
function destructivelyRemoveFirstCat(name){
    cats.shift(name);
};
function appendCat(name){
    return copyCats = [...cats,name];
};
function prependCat(name){
    return copyCats = [name,...cats];
};
function removeLastCat(name){
    return copyCats = cats.slice(0,cats.length-1);
};
function removeFirstCat(name){
    return copyCats = cats.slice(1,cats.length);
};