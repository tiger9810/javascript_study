'use strict';

//インタラクティブな操作


//buttonの要素を取得する
//clickされた時の動作を決める！！~addEventListener(イベントの種類を文字列で指定, 実行したい処理を関数で渡す)~
// document.getElementById('todo').addEventListener('click', () => {
//     const todo = document.createElement('li');
//     const text = document.querySelector('input');
//     //inputに入力された値はvalue属性で取得できる。
//     todo.textContent = text.value;
//     //appendChild(追加したい要素←ここではtodo)
//     document.getElementById('writeUl').appendChild(todo);
//     //textの中身をからにする
//     text.value = '';
    
//     text.focus();
// });

//colorというボタンを押すとそのときに選択されている色をリストに追加するという処理
//まずボタンの要素を取得して、イベントリスナーを設定
document.getElementById('color-button').addEventListener('click', () => {
    //ボタンを押したときにリストを作成する
    const color = document.createElement('li');
    //selectで選択されている要素を取得する
    const selectColor = document.querySelector('select');
    //selectでもinputでも値はvalueに格納される
    //作ったリストに取得した値を入れる
    color.textContent = `${selectColor.value}-${selectColor.selectedIndex}`;
    document.getElementById('colorUl').appendChild(color);
});

//radioボタンが押されたら、その値をlistに追加していくやつ
document.getElementById('radio-button').addEventListener('click', () => {
    //buttonを押したときに作成するリストを作成する
    const radioColor = document.createElement('li');
    //ラジオボタンで選択されている要素を取得する
    const colors = document.querySelectorAll('input');
    let selectedColor;
    //querySelectorAllで取得した配列を1つずつ読み取る
    colors.forEach(color => {
        if (color.checked === true) {
            selectedColor = color.value;
        } else {
            console.log('hello');
        }
    });
    radioColor.textContent = selectedColor;
    document.getElementById('radioUl').appendChild(radioColor);
});