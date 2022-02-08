function useless(strings, ...values){
        return `i render ${strings[0]}everything useless.`;
}

let name = 'Benedict';
let ocupation = 'Being awesome';
let a = 'a';

let sentenc = useless `hi i'm ${name} and i'm busy at ${ocupation},something else ${a}`;

console.log(sentenc)