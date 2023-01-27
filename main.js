'use strict';

// if (条件式) {
//     trueだった時の処理;
// } else {
//     falseだった時の処理;
// }

// if (条件式A) {
//     条件式Aがtrueだった時の処理;

// } else if (条件式B){
//     AがfalseでBがtrueだった時の処理;

// } else {
//     AもBもfalseだった時の処理
// }

//80点以上→Great,60点以上→Good,60点以下→Umm,と表示する
//{}中かっこで囲われている部分をブロックという
const score = 59;

if (score >= 80) {
    console.log('Great');

} else if (score >= 60) {
    console.log('Good');
} else {
    console.log('Umm...');
}