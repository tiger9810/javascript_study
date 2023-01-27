'use strict';

//配列の操作
const array = [4, 5, 8];
console.log(array);
//先頭に要素を追加する場合→ unshift()
array.unshift(4);
console.log(array);

//先頭の要素を削除する場合→ shift()
array.shift()
console.log(array);

//末尾に要素を追加する場合→ push()
array.push(7, 8, 9)
console.log(array);

//末尾の要素を削除する場合→ pop()
array.pop()
console.log(array);

//途中の要素を操作する →配列名.splice(変化が開始する位置,　削除数, 追加する要素);
//index番号2から1つ削除する場合
array.splice(2, 1);
console.log(array);

//index番号2から4つ要素を追加する場合
array.splice(2, 0, 45, 32, 22, 1);
console.log(array);