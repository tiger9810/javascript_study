'use strict';

const text = document.querySelector('textarea');
//テキストエリアにマウスフォーカスすると発生するイベント
text.addEventListener('focus', () => {
    console.log('focus');
});

//テキストエリア以外にマウスクリックすると発生するイベント
text.addEventListener('blur', () => {
    console.log('blur');
});

//テキストエリアに文字を入力したときに発生するイベント
text.addEventListener('input', () => {
    console.log('input');
    console.log(text.value.length);
});


text.addEventListener('change', () => {
    console.log('change');
});

