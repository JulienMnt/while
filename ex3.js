//          WHILE
/**
 * Declarer une varaible a qui est egale a 3
 * tant que a est plus petit que 9 
 * incremente a de 1
 * si a est egal a 8 on arrete la boucle 
 * si a est egal a 7 on revient au debut de la boucle 
 * on console log(a)
 */
"use strict";

let a = 3;
while(a < 9){
    a++;
    if(a == 8){
        break;
    }
    else if(a == 7){
        continue;
    }
}
console.log("a est égal à ", +a);
