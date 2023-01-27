'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32);
console.log(array);

//map関数は配列に何らかの処理をして新しい作成する
//filter関数は配列の要素をチェックして、条件にあうものだけを抽出して別の配列として取得することができる
//偶数の要素だけ抽出して新しい配列を作成する
//引数一つの時は関数の引数のかっこ不要
//filter(function) filterのfunctionの中の条件式でtrueになったものだけが抽出されて、新しい配列となる。
const evenNumbers = array.filter(Number => {
    if (Number % 2 === 0) {
        return true;
    } else {
        return false;
    }
});

//上記の条件式はtrueの時はtrueを返し、falseのときはfalseを返しているので、わざわざif文作成しなくてもよい
//このように省略する
const shortEvenNumbers = array.filter(Number => Number % 2 === 0);
console.log(evenNumbers);
console.log(shortEvenNumbers);