'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32, 22, 1);
console.log(array);

//分割代入
//配列の個々の要素を定数に代入する。
const [a, b, c, d, e, f] = array;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(f);

//要素の途中までしか定数に追加しないとき...のレスト構文を使う
//...新しい配列名でその配列に残りの要素を代入する。
const [g, h, ...remain] = array;
console.log(g);
console.log(h);
console.log(remain);

//分割代入は値の交換にもよく使われる
let x = 30;
let y = 20;

console.log(x);
console.log(y);
[x, y] = [y, x];

console.log(x);
console.log(y);
