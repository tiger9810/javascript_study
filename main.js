'use strict';

//object記法
//キーと値を対応させて記述する。
//keyと要素をまとめてプロパティという
const point = {
    x: 100, 
    y: 300,
};

console.log(point);

//objectにアクセスする
console.log(point.x);
console.log(point['y']);

//プロパティに値を再代入
//object名.キーで値を指定できる。
point.x = 120;

//要素の追加も同様
//object名.追加したいキー = 追加したい値;でプロパティを追加できる
point.z = 400;
console.log(point);

//要素の削除はdeleteを使用する。
//delete object名.key;で削除できる
delete point.x;

console.log(point);