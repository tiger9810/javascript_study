'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32);
console.log(array);

//forEach((引数)関数)要素の数だけ処理を実行してくれる

array.forEach((score, index) => {
    console.log(`score: ${score}: ${index}`);
});
