'use strict';

//インタラクティブな操作
//まずボタンを押したときの動きを決める
document.getElementById('checkButton').addEventListener('click', () => {
    //listの作成
    const checkColor = document.createElement('li');
    //input要素を取得する
    const colors = document.querySelectorAll('input');
    //checkboxは複数選択可なので、配列で変数を定義する
    let checkedColor = [];
    //forEach()は引数と関数の間にかんまいらない
    colors.forEach(color => {
        if (color.checked === true) {
            //push()で配列に値を追加する
            checkedColor.push(color.value);
        }
    });
    //textContentには()要らない。関数ではなく、Contentの指定だから
    checkColor.textContent = checkedColor.join('#');
    document.getElementById('checkUl').appendChild(checkColor);
});