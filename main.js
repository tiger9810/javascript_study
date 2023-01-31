'use strict';

//ユーザーから名前を受け取って、大文字にする処理.toUpperCase()は文字列しか受け取れない
// const name = 'tiger98';
const name = 98;
//文字列以外だった場合の処理
//例外が起きそうな個所をtry()で囲ってあげる
try {
    console.log(name.toUpperCase());
} catch (e){
    console.log(e)
}

//try{}catch{}で囲っていれば、finishまで表示できる
console.log('finish!!');
//catchで例外が起きた後の処理を{}に記述する
//catch(e)、(e)を引数にとると、error情報を引数eに格納できる