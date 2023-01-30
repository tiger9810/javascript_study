'use strict';
//日時に関する命令

//現在時刻の取得　new Date();
//実行環境のタイムゾーンに依存
const d = new Date();
console.log(d);

//年の取得 d.getFullYear();
console.log(`${d.getMonth() + 1}月 ${d.getDate()} 日`);

//月の取得、d.getMonth();


//日にちの取得、d.getDate();


//曜日の取得、d.getDate();


//時間の取得、 d.getHours();


//分の取得、 d.getMinutes();


//秒の取得、 d.getSeconds();
//秒の取得、 d.getMilliseconds();