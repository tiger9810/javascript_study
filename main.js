'use strict';

{
    const scores = [80, 89, 90];
    console.log(scores);
    console.log(`scores: ${scores[0]}`)
    console.log(`scores: ${scores[1]}`)
    console.log(`scores: ${scores[2]}`)
    console.log(scores.length);

    //ループ処理を使うと短く書ける
    for (let i = 0; i < 3; i++) {
        console.log(`scores: ${scores[i]}`)
    }
    console.log(scores.length);
    //要素数もlengthで取得しておけば、変更があっても要素の数だけforで処理できる。
    for (let i = 0; i < scores.length; i++) {
        console.log(`scores: ${scores[i]}`)
    }
}
//変数名.lengthで要素数を取得できる