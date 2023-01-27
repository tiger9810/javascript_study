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

//こちらは配列をValueとするオブジェクト
const points2 = {
    x: [60, 30, 40],
    y: [50, 30, 20],
    z: [10, 20, 40],
}

//配列をValueとするObjectのKeyを配列として取得
const points2KeyArrays = Object.keys(points2);
console.log(points2KeyArrays);

//取得したKeyの配列にたいしてforEach()を適用して、オブジェクトのValueである配列を取得。
//forEachの第二引数にはindexが入る。
points2KeyArrays.forEach((Key, index) => {
    console.log(`key${index}: ${points2[Key]}`);
});





//こちらはobjectを要素として持つ配列
const points = [
    {x: 30, y: 20},
    {x: 10, y: 30},
    {x: 40, y: 50},
];

//配列なので、直接forEach()が適用できる。
points.forEach((element, index) => {
    //ここでは、配列の要素であるオブジェクトを取り出している
    console.log(element);
    //さらにobject要素のKeyとValueを取り出してみる
    //objectの要素を取り出すときにはまず、Keyを配列として取得するので、Object.keys(オブジェクト名);を使用する
    //elementに対してObject.keys()を適用する。
    const pointsKeysArray = Object.keys(element);
    console.log(pointsKeysArray);
    //取得した配列のKeyに対してforEach()を適用して、Valueを取り出す
    pointsKeysArray.forEach(pointElement => {
        //keyは文字列で取得されているので、[]でくくるタイプのして方法。.keyではない
        console.log(`key${index}: ${pointElement}, Value: ${element[pointElement]}`)
    });
});

//配列の中のオブジェクト要素の値を取り出す場合の手順
//1. 配列.forEach(引数)で配列の要素を取り出す
//2. 取り出した配列の要素(オブジェクト)に対して、Object.keys()を適用して、Keyを配列として取得する
//3. 配列として取得したKeyに対してKeysArray.forEach()を適用して、objectのValueを取得する。


//配列(forEachで変換)→オブジェクト(Object.keysで変換)→Keyの配列→要素の取り出し




