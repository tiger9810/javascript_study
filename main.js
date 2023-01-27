'use strict';

const price = 1200;

//より大きい
console.log(price > 1000);//true

//より小さい
console.log(price < 1000);//false

//以上
console.log(price >= 1000);//true

//以下
console.log(price <= 1000);//false

//等しい
console.log(price === 1000);//false

//異なる
console.log(price !== 1000);//true

// false <- 0, null, undefined, '', false
// true <- それ以外。

console.log(Boolean(0));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(5));