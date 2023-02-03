'use strict';

//form内のボタンがクリックされた時のイベントは、submit.クエリーセレクターでもformを指定する
//フォームが送信されたらページがリロードされちゃうので、console.logとか一瞬で消えてしまう。
//formタグを指定して、submitイベントだとエンターキーで送信できる。
document.querySelector('form').addEventListener('submit', (e) => {
    //ページ遷移をキャンセルする
    e.preventDefault();
    console.log('hello');
})
