'use strict';

//SNSのいいねと投稿の要素を持つを持つobjectを作成する

class Posts {
    constructor(text){
        this.text = text;
        this.likeCount = 0;
    }//セミコロンいらない
    show() {
        console.log(`${this.text}'s likecount: ${this.likeCount}`);
    }
    like() {
        this.likeCount++;
        this.show();
    }
//インスタンスを介さずにclassから直接メソッドを呼び出す方法
//class自体の説明を表示するメソッドを作成 static
//this.は使用できない
//class内で使われるthisはインスタンス(クラスから作られたオブジェクト)なので、インスタンスを作成しない静的メソッドでは使用できない。
    static showInfo() {
        console.log('Post class version 1.0');
    }
}

const posts2 = [
    new Posts('hello first post!'),
    new Posts('next post comming soon'),
];



posts2[0].show();
posts2[0].like();
//posts2[0].likeCount++:ではなくて、like()メソッドを使用するのが推奨
posts2[1].show();

//static function()で設定した静的メソッドを直接呼び出す
Posts.showInfo();