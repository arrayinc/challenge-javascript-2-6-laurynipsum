// *** YOUR ANSWER BELOW ***

function first(word){
    return "super" + word;
}
console.log(first("lame"));

function secondary(word){
    return "duper" + word;
}
console.log(first(secondary(" not fun")));

function ET(word){
    return "Uber " + word;
}

console.log(ET(first(secondary("cool"))));

// I know I am not supposed to capitalize the first letter in a function, but I couldn't help myself.