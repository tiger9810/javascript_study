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
    const timeOutId = setTimeout(showTime, 1000);
    if (i > 2) {
        clearTimeout(timeOutId);
    }
}
//設定した時間の後に1度だけ処理を実行する命令setTimeout(関数, ミリ秒)
showTime();
//clearTimeout()でsetTimeout()が止まる