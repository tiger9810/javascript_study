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

//アロー関数を使用した省略記法ではfunctionを消して、=の後に直接引数を持ってくる

const sum1 = function (a, b, c) {
    return a + b + c;
}

//アロー関数を使用した省略記法
const sum2 = (a, b, c) =>  a + b + c;

console.log(sum1(3, 4, 5));
console.log(sum2(3, 4, 5));

//引数が一つの場合は()も省略できる。
const double1 = function(a) {
    return a * 2;
}

console.log(double1(2));

const double2 = a => a * 2;

console.log(double2(3));