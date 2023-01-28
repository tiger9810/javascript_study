'use strict';

const str = 'hello';

//文字数カウント.length。配列の要素数とかも取得できる。for文の時便利。forEach()あるけど、、、
console.log(str.length);

//(定数)変数.substring(開始index, 終了index);開始から終了までの要素を取得する。取得したデータ型はstring.
console.log(str.substring(2, 4));
console.log(typeof(str.substring(2, 4)));

//文字列も配列と同じようにindexで文字を指定できる
//だからといって、その位置に新しく値を設定できるわけではない。ただただ情報を取得できるだけ。
console.log(str[1]);

//配列の要素を繋げて、一つの文字列にする.join('結合するときに使用する区切り文字');
//配列.join('区切り文字');→文字列になる。
const x = [1, 2, 3, 4, 5];
const xString = x.join('$');
console.log(xString);

//文字列を区切って、配列変換する.split();
//文字列.split('取り外す区切り文字')→配列になる。
const xArray = xString.split('$');
console.log(xArray);
//分割代入を使用して、時間をhour、分をminute、秒をsecondという定数にする。
const time =[3, 44, 52];

//.join()で時刻っぽく表示する。
const t = time.join(':');
console.log(t);

//分割代入は配列を定数で宣言して、そこに代入したい配列を入れる。
const [hour, minute, second] = t.split(':');

console.log(hour);
console.log(minute);
console.log(second);
