'use strict';

const str = 'hello';

//文字数カウント.length。配列の要素数とかも取得できる。for文の時便利。forEach()あるけど、、、
console.log(str.length);

//(定数)変数.substring(開始index, 終了index);開始から終了までの要素を取得する。取得したデータ型はstring.
console.log(str.substring(2, 4));
console.log(typeof(str.substring(2, 4)));

//文字列も配列と同じようにindexで文字を指定できる
//だからといって、その位置に新しく値を設定できるわけではない。ただただ情報を取得できるだけ。