'use strict';
//日時に関する命令

//現在時刻の取得　new Date();
//自分の誕生日が何曜日かを知る
//ツェラーの公式というものがあるらしい。
const d = new Date(1998, 9, 9);
//.setHours()で時間分秒をあとから指定できる。
d.setHours(22, 25, 24);
console.log(d);
