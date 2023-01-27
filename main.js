'use strict';
//contine;でループをスキップする

for (let i = 1; i <= 10; i++) {
    if (i === 4) {
        continue;
    }
    if (i % 3 === 0) {
        continue;
    } 
    console.log(i);
}