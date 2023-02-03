'use strict';

//インタラクティブな操作


//buttonの要素を取得する
//clickされた時の動作を決める！！~addEventListener(イベントの種類を文字列で指定, 実行したい処理を関数で渡す)~
document.querySelector('button').addEventListener('click', () => {
    const todo = document.createElement('li');
    const text = document.querySelector('input');
    //inputに入力された値はvalue属性で取得できる。
    todo.textContent = text.value;
    //appendChild(追加したい要素←ここではtodo)
    document.querySelector('ul').appendChild(todo);
    //textの中身をからにする
    text.value = '';
    text.focus();
});