const numeros = [1, 7, 3, 6,8,9]; // [1, 3, 6, 7,8,9]
const numeroABuscar = 1;

function bubblesort(array) {

    for (let j = 0; j < array.length; j++) {
        for (let i = 0; i < array.length; i++) {
            if (array[i] > array[i + 1]) {
                let temporal = array[i + 1];

                array[i + 1] = array[i];
                array[i] = temporal;
            }
        }
    }

    return array;
}

function binarysearch(array, b) {
    let posicion;

    let izquierda = [array[0], array[1]]; // [1, 3]
    let centro = [array[2], array[3]]; // [6, 7]
    let derecha = [array[4], array[5]]; // [8,9]
    
    if (b < centro[0] ) { // el numero esta en el array derecha? comparo b < 
        let izquierdaSegundo = izquierda[0]; // 1
        let derechaSegundo = izquierda[1]; // 3
        
        if (b < derechaSegundo) { // b < 1
            if (b == izquierdaSegundo) {
                posicion = 0;
            } 
        }else {
            if (b == derechaSegundo) {
                posicion = 1;
            }
        }
    } else if (b >= derecha[0]) { // el numero esta en el array derecha
        let izquierdaSegundo = derecha[0];
        let derechaSegundo = derecha[1];
        
        if (b < derechaSegundo) { 
            if (b == izquierdaSegundo) {
                posicion = 4;
            }
        } else {
            if (b == derechaSegundo) {
                posicion = 5;
            }
        }
    }else{
        let izquierdaSegundo = centro[0];
        let derechaSegundo = centro[1];
        
        if (b < derechaSegundo) { // b < 3
            if (b == izquierdaSegundo) {
                posicion = 2;
            }
        } else {
            if (b == derechaSegundo) {
                posicion = 3;
            }
        }
    }

    return posicion;
}

let ordenado = bubblesort(numeros);
console.log(binarysearch(ordenado, numeroABuscar));