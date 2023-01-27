'use strict';
//関数
// function 関数名() {
//     処理;
// }
//引数にlet, constなどの宣言はいらない
//テンプレートリテラルで引数を埋め込む

function showAd(message = 'Ad') { //関数定義時の引数は仮引数という
//引数を渡さなかった時の場合の値も設定できる
    console.log('--------')
    console.log(`-- ${message} --`)
    console.log('--------')
}

console.log('I am tiger98');
showAd('first ad'); //関数実行時の引数は実引数という
console.log("Nice to meet you");
showAd('second ad');
console.log('I wanna girl friend');
showAd();