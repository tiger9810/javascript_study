'use strict';

//インタラクティブな操作


//buttonの要素を取得する
//clickされた時の動作を決める！！~addEventListener(イベントの種類を文字列で指定, 実行したい処理を関数で渡す)~
document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    targetNode.textContent = 'Content was Changed by getElementById';
    targetNode.title = 'title was Changed by getElementById';
//クリックすると和訳が表示されるようにする
    // targetNode.textContent = 'こんにちは　世界！'
    //target属性を指定するのではなく、data-から始まるカスタムデータ属性を指定してみる
    //指定したカスタムデータ属性に代入している文字列がid=targetのp要素に代入される
    targetNode.textContent = targetNode.dataset.translation;
});