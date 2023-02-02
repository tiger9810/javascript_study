'use strict';

//SNSのいいねと投稿の要素を持つを持つobjectを作成する
const posts = [
    {
        text: 'hello',
        likeCount: 0,
        //メソッドとして定義するときはfunctionいらない
        show() {
            //同じオブジェクト内のプロパティはthisで表現できる。ここではposts[0]=thisという感じ
            console.log(`${this.text}のいいね数は${post.likeCount}です`);
        }
    },
    {
        text: '2nd post!',
        likeCount: 1,
        show() {
            console.log(`${this.text}:likeCount${this.likeCount}`)
        }
    },
];

//オブジェクト内で定義するとメソッドと呼ばれる
function show(post) {
    console.log(`${post.text}のいいね数は${post.likeCount}です`);
}

// show(posts[1]);
//オブジェクト.関数で呼び出せる
posts[1].show();

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

}

//インスタンスの作りかた
//new Class名(引数)で作成できる。

const posts2 = [
    new Posts('hello first post!'),
    new Posts('next post comming soon'),
];

posts2[0].show();