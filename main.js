'use strict';

//SNSのいいねと投稿の要素を持つを持つobjectを作成する

class Posts {//親クラス
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

    static showInfo() {
        console.log('Post class version 1.0');
    }
}
//クラスの継承
//SponsorクラスとPostクラスは似ているので、どうにか同じテンプレを使用できないか？

//Postクラスで使用しているプロパティとメソッドを流用できないか→クラスを継承する
//継承を受けるクラス(ここではSponsorクラス)にextendsをつける
//class 継承を受けるクラス(子クラス) extends 継承を与えるクラス(親クラス)
class SponsorPosts extends Posts {//これでPostsクラスを使用できる
    constructor(text, sponsor) {
        //子クラスで親クラスのconstructor()を呼び出す命令。親クラスのconstructorで定義しているプロパティを引き継げる。
        super(text);
     // this.text = text;←super(text);で親クラスから継承
     // this.likeCount = 0;←super(text);で親クラスから継承
        this.sponsor = sponsor;
    }
    show() {//←親クラスにもあるけど、子クラス独自の関数も定義しているので、一応メソッドを定義する。
//         console.log(`${this.text}'s likecount: ${this.likeCount}`);　←親クラスから継承する
        super.show();//super.親メソッドで子クラスに引き継げる
        console.log(`${this.sponsor}`);
    }
//     like() {←親クラスとまったく同じなので、定義しなくてもよい
//         this.likeCount++;
//         this.show();
//     }

//     static showInfo() {
//         console.log('Post class version 1.0');
    }


const posts2 = [
    new Posts('hello first post!'),
    new Posts('next post comming soon'),
    new SponsorPosts('this is sponsor', 'this is sponsor Ad!!'),
];

posts2[2].like();