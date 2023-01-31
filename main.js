'use strict';
//日時に関する命令

//現在時刻の取得　new Date();
const d = new Date();
console.log(d);
//台南にいるが、台北の時刻が表示される。
//Tue Jan 31 2023 20:52:38 GMT+0800 (台北標準時)

//年の取得 d.getFullYear()
console.log(`${d.getFullYear()}年`);

//月の取得、d.getMonth()
//月は0月から始まる！！
console.log(`${d.getMonth() + 1}月`);

//日にちの取得、d.getDate()
console.log(`${d.getDate()}日`);

//曜日の取得、d.getDay()
//日曜日からはじまり0~6で表示
console.log(`${d.getDay()}曜日なので`);
switch (d.getDay()) {
    case 0: 
        console.log("Sunday");
        break;
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;

}

//時間の取得、 d.getHours()
console.log(`${d.getHours()}時`);

//分の取得、 d.getMinutes()
console.log(`${d.getMinutes()}分`);

//秒の取得、 d.getSeconds()
console.log(`${d.getSeconds()}秒`);

//秒の取得、 d.getMilliseconds()
console.log(`${d.getMilliseconds()}ミリ秒`);

//全世界で一致している時間
// console.log(`${d.getTime()}`);
//UTCと呼ばれる1970/01/01 00:00:00からの経過ミリ秒を示している。

//UTCを時間に直してみる
//ミリ秒を一年に補正
const oneDay = 1000 * 60 * 60 * 24 * 365;
// console.log(oneDay);
console.log(`UTC開始時間から今まで約${Math.floor(d.getTime() / oneDay)}年経っています。`);