'use strict';

//　DOM操作の基本
//　Domはdocumentというオブジェクトで扱える
//　documentオブジェクトのdocument.querySelector(操作したい要素を指定)というメソッドでHTML要素を操作できる
// 
function domOperation() {
    document.querySelector('h1').textContent = 'Changed';//textContentでタグで囲われたコンテンツを指定できる。タグ→コンテンツの順に指定していく

    //ある一つの要素(タグ＋コンテンツ)を操作するときにid属性を使用することもある
    //ハッシュタグ＋id名で指定できる
    document.querySelector('#target').textContent = "I'm beginner";
    //documentオブジェクトにgetElementByIdメソッドがあってそれで指定もできる
    document.getElementById('target2').textContent = "I'm practice now !";
}



//setTimeout(関数, 開始時刻);
setTimeout(domOperation, 3000);