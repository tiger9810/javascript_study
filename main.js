'use strict';

//SNSのいいねと投稿の要素を持つを持つobjectを作成する

//postsのテンプレートをクラス、クラスから作ったオブジェクトをインスタンスという

//class クラス名でクラスを作成できる
//constructor()メソッドでクラスを初期化することによって、インスタンスのプロパティをセットする
//クラスを定義するうえで、this.key名でインスタンスを作成した際にできるプロパティのKeyを設定する
//constructor()メソッドの引数にはインスタンスごとに違う値をとるValueを設定する
class Posts {
    constructor(text){
        //オブジェクトはkey: value,で設定しているが、classでインスタンスのプロパティを定義するときはthis.key = value;で設定する
        this.text = text;
        this.likeCount = 0;
    }//セミコロンいらない
    //メソッドはconstructor()の外で定義する

    show() {
        console.log(`${this.text}'s likecount: ${this.likeCount}`);
    }
    like() {
        this.likeCount++;
        this.show();
    }

}

//インスタンスの作りかた
//new Class名(引数)で作成できる。

const posts2 = [
    new Posts('hello first post!'),
    new Posts('next post comming soon'),
];

posts2[0].show();
posts2[0].like();
//posts2[0].likeCount++:ではなくて、like()メソッドを使用するのが推奨
posts2[1].show();