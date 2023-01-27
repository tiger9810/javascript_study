'use strict';

//15になる。文字列と数値でも計算できてしまう。
console.log('5' * 3);

//2になる。String型でも数値として計算されてしまう。
console.log('5' - '3');

//足し算の場合、数値と文字列の組み合わせは文字列として処理される。つまり、53になる
console.log('5' + 3);

//parseInt('4', 10)とすると、文字列を10進数の整数に変換する
console.log(parseInt('5', 10) + 3);
//出力は53→8となる。