'use strict';

//インタラクティブな操作


//buttonの要素を取得する
//clickされた時の動作を決める！！~addEventListener(イベントの種類を文字列で指定, 実行したい処理を関数で渡す)~
document.querySelector('button').addEventListener('click', () => {
    const targetNode = document.getElementById('target');
    targetNode.textContent = 'Content was Changed by getElementById';
    targetNode.title = 'title was Changed by getElementById';
//リストの要素を追加する
//まずli要素を追加する。document.createElement('要素名')
    const item2 = document.createElement('li');
//中身のテキストを設定する
    item2.textContent = 'hello world again!!!!!'
//DOMツリーに追加する（親要素に対して子要素となるものの末尾に追加する）
    //親要素であるul要素を取得する。要素を取得できるquerySelectorを使う
    const parentUl = document.querySelector('ul');
    //append=付けるという意味の.appendChildで親要素に子要素を追加する。
    parentUl.appendChild(item2);
});