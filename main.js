'use strict';
//日時に関する命令

//現在時刻の取得　new Date();
//現在日時をconsoleに表示する関数
// const showTime = () => {
//     return console.log(new Date());
// }
let i = 0;
function showTime() {
    console.log(new Date());
    i++;
}

//setInterval(1秒毎に表示したい関数, 時間をミリ秒で指定)を使用して1秒ごとに表示させる
// setInterval((showTime), 1000);
//関数を引数として渡す場合は、かっこをつけない
if (i > 2){
    //setIntervalを止める処理clearInterval(止めたい関数を格納した定数)
    clearInterval(showTime);
}
const intervalId = setInterval(showTime, 1000);