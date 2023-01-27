'use strict';
//関数
// function 関数名() {
//     処理;
// }
//引数にlet, constなどの宣言はいらない
//テンプレートリテラルで引数を埋め込む

function sum1(a, b, c) {
    console.log(a + b + c);
}

sum1(1, 2, 4);
sum1(2, 4, 5);

function sum2(a, b, c) {
    return a + b + c;
}
//returnを使うと、関数の処理結果を値として扱える。
//関数の最後にreturnで値を返すと、計算で使用できる
console.log(sum2(3, 4, 5));