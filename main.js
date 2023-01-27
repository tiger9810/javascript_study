'use strict';
//for文とテンプレートリテラルで値を埋め込んで文字列とする

let hp = 100;

do {
    console.log(`${hp} HP `);
    hp -= 15;
} while (hp > 0);