'use strict';

//objectのプロパティを列挙する
//Object.keys(object名);objectのkeyをすべて配列で取得できる
//取得したkeyの配列をforEach()でぶん回す

//まずオブジェクトを用意
const object = {
    x: 100,
    y: 200,
    z: 300,
}

//Object.keys()でkeyを取得
const KeysArray = Object.keys(object);
console.log(KeysArray);

//forEachで引数KeyにKeysArrayの要素を一つずつ代入していく
//object名[key]の指定方法でvalueを指定する。
KeysArray.forEach(Key => {
    console.log(`key: ${Key}, value: ${object[Key]}`);
});


