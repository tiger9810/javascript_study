'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32);
console.log(array);

//map関数で配列を作成する
// const updateValues = array.map((value) => {
//     return value + 20;
// });

//省略記法
//引数一つなのでかっこ省略
//returnだけなので、{}省略
const updateValues = array.map(value => value + 20);
console.log(updateValues);