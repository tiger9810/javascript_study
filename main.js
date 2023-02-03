'use strict';

//ダブルクリックした時のイベントdblclick
document.getElementById('checkButton').addEventListener('dblclick', () => {
    console.log('dbclicked!')
});

//マウスを動かしたときのイベント
//イベント指定後のかっこに引数を渡せば、座標が得られる
//この引数はイベントオブジェクトと呼ばれる
//引数はよくeとなる
document.addEventListener('mousemove', e => {
console.log(e.clientX, e.clientY);
});
document.addEventListener('keydown', e => {
console.log(e.key);
});

