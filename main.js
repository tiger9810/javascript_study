'use strict';

//インタラクティブな操作


//buttonの要素を取得する
//clickされた時の動作を決める！！~addEventListener(イベントの種類を文字列で指定, 実行したい処理を関数で渡す)~
document.querySelector('button').addEventListener('click', () => {
    document.getElementById('target').textContent = 'first change!!';

    const targetNode = document.getElementById('target');
    targetNode.textContent = 'Content was Changed by getElementById';
    targetNode.title = 'title was Changed by getElementById';
});