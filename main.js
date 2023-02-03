'use strict';

//　DOM操作の基本
//　Domはdocumentというオブジェクトで扱える
//　documentオブジェクトのdocument.querySelector(操作したい要素を指定)というメソッドでHTML要素を操作できる
// id属性がなければ、タグそのものを指定する。querySelectorAllで取得した要素は配列なので、forEach()を使用できる
function domOperation() {
    //tag → Contentの順番で指定する
    //querySelectorでは一つ目のpタグしか操作できない。
    document.querySelector('p').textContent = 'first change!!';
}
function changeP() {
    document.querySelectorAll('p')[2].textContent = 'change element';
}
function changeAllp() {
    document.querySelectorAll('p').forEach((p, index) => {
        p.textContent = `${index}番目のpを変更しました。`
    })
} 



//setTimeout(関数, 開始時刻);
setTimeout(domOperation, 1000);
setTimeout(changeP, 2000);//←一つ目のsetTimeoutが終わるタイミングで開始するのではなく、同時刻に代わる
setTimeout(changeAllp, 3000);