'use strict';
//関数宣言
// function 関数名(仮引数1, 仮引数2, ...) {
//     処理;
//     return 返したい値;
// }

//関数式(定数、変数に関数を入れる、メリットはわからない)
//定数、変数に代入された関数を無名関数という
//関数式の際にはブロック{}の最後に;を必要とする
// const 定数名 = function(仮引数1, 仮引数2, ...) {
//     処理;
//     return 返したい値(返り値という);
// }; ←;必要！！

//引数にlet, constなどの宣言はいらない
//テンプレートリテラルで引数を埋め込む

const sum = function (a, b, c) {
    console.log(a + b + c);
};

sum(1, 2, 4);
sum(2, 4, 5);

function sum2(a, b, c) {
    return a + b + c;
}
//returnを使うと、関数の処理結果を値として扱える。
//関数の最後にreturnで値を返すと、計算で使用できる
console.log(sum2(3, 4, 5));