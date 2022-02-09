/*
parametros definidos

function miFuncion(a,b = 10) {
    return a + b;
}

console.log(miFuncion(9));
console.log(miFuncion(2,4));
console.log(miFuncion(10,20));
*/


/*

funciones indefinidas

function miFuncion(a, ...numeros) {
    let sum = a;
    numeros.forEach(function(n){
            sum += n ;
    })
        return sum;
}

const a = [1,2,3,4,5];

console.log(miFuncion(10, ...a))

*/


/*

    FUNCIONES FLECHA

let xES5 = function(x,y = 3){
    return x*y;

}

    let xES6 = (x , y) => x * y;

console.log(xES5(2 , 2));
console.log(xES6(2 , 2));

*/


//      Desentructuración I

let a,b,rest;
[a,b] = [10,20];
console.log(a);
console.log(b);

[a,b, ...rest] = [10,20,30,40,50];
console.log(rest);

//      Desentructuración II

    ({a,b} = { a:10, b:20});
    console.log(a);
    console.log(b);

    ({a,b, ...rest} = {a:10, b:20, c:30, d:40})

    console.log(a);
    console.log(b);
    console.log(rest);


//      Desentructuración III

    const foo = ['one', 'two', 'three'];
    const [red, yellow, green] = foo;

    console.log(red);
    console.log(yellow);
    console.log(green);
   
//           Desentructuración IV

let x,y ;

[x=5, y=7] = [1];

console.log(x);
console.log(y);


//           Desentructuración V

    let aa = 1;
    let bb = 3;

    [aa,bb] = [bb,aa];

    console.log(aa);
    console.log(bb);

    const arr = [1,2,3];
    [arr[2],arr[1]] = [arr[1],arr[2]];

    console.log(arr);

    //           Desentructuración VI

    function f() {
        return [1,2];
    }

    let aaa,bbb;

    [aaa,bbb] = f()

    console.log(aaa);
    console.log(bbb);