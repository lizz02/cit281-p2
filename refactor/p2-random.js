/*
    CIT 281 Project 2
    Name: Elizabeth Yost
*/

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomInteger(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

//returns a random letter from "alphabet"
function getRandomLetter(){
const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
return alphabet[getRandomInteger(1,alphabet.length-1)]
}


 //loop for a random # of intervals between min and max parameters, adding a random letter for each loop to "result"
function getRandomString(minLength, maxLength){
    let result = "";
    for (let i = 0; i < getRandomInteger(minLength, (maxLength + 1)); i++) {
        result += getRandomLetter();
    }
    return result
}
//returns a string sorted in ascending order by converting it to an array, sorting, then back to a string
function getSortedString(string) {
    return ((string.split("")).sort()).join("")
}

console.log(getSortedString(getRandomString(10, 20)));