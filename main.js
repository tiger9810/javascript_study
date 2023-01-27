'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32, 22, 1);
console.log(array);

//スプレッド構文　配列の中に配列を展開する
const array2 = [100, 101, 102];

const marge = [...array, ...array2];
console.log(marge);

//スプレッド構文は配列の中身だけを展開するので、関数の引数によく使われる

const sum = (a, b, c) => a + b + c;

console.log(sum(...array));