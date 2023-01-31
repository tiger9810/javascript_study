'use strict';
//日時に関する命令

//現在時刻の取得　new Date();
//自分の誕生日が何曜日かを知る
//ツェラーの公式というものがあるらしい。
const d = new Date(1998, 9, 9);
//.setHours()で時間分秒をあとから指定できる。
d.setHours(22, 25, 24);
console.log(d);

//警告 alert('文字列');
alert('誕生日の曜日をを知りたくない方は閉じてください！！')
//確認 confirm('文字列');
const answer = confirm('自分の誕生日が何曜日かしりたいデスカ...？');

if (answer) {
    switch (d.getDay()) {
        case 0: 
            alert("Sunday!");
            break;
        case 1:
            alert("Monday");
            break;
        case 2:
            alert("Tuesday");
            break;
        case 3:
            alert("Wednesday");
            break;
        case 4:
            alert("Thursday");
            break;
        case 5:
            alert("Friday");
            break;
        case 6:
            alert("Saturday");
            break;
}}