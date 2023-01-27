'use strict';

//object記法
//キーと値を対応させて記述する。
//keyと要素をまとめてプロパティという
const point = {
    x: 100, 
    y: 300,
};

//スプレッド構文もオブジェクトに対して使える
const otherProps = {
    r: 4,
    color: 'red',
    ...point,
};

console.log(otherProps);

//分割代入もオブジェクトに使える
//分割代入とは、配列の要素、またはオブジェクトのプロパティを一つ取り出して、定数とするときに使うやつである。
//残りのオブジェクトに対してはレスト構文で新たにobjectを作成する
const {x, r, ...remains} = otherProps;
console.log(x);
console.log(r);
console.log(remains);
