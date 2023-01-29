'use strict';

//数値計算に関する命令

//配列の合計と平均を計算する。forEach()
//まず計算するための配列の作成
const array = [1, 2, 3, 4, 5, 6];

//forEach()関数を使用して、配列の要素を1つずつ加算していく
//forEach()の中では変数を宣言することはできないので、予め宣言しておく必要がある。
let sum = 0;
array.forEach(element => {
    sum += element;
});

const ave = sum / array.length;

console.log(sum);
console.log(ave);

//小数点以下を切り捨て→数値に対して操作Mathの関数
//Math.floor(value);
let kirisute = Math.floor(ave);
console.log(kirisute);

//小数点切り上げ→数値に対して操作、Mathの関数
//Math.ceil(value);
let kiriage = Math.ceil(ave);
console.log(kiriage);

//四捨五入→数値に対して操作、Mathの関数
//Math.round(value);
let sisyagonyuu = Math.round(ave);
console.log(sisyagonyuu);

//小数点以下表示
//こいつだけ、ドットタイプの命令、関数と命令があるってことか。関数は引数を必要とするけど、命令は実行する先を指定すればよい
//変数名.toFixed(小数点何桁まで表示するか);
let syousuutennika = ave.toFixed(3);//3桁まで表示
console.log(syousuutennika);

//乱数生成Math.random()
//random()関数で生成した乱数をtoFixed()で2桁表示にする
let random = Math.random().toFixed(2) * 100;
console.log(random);