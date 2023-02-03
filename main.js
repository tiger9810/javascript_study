'use strict';

//　DOM操作の基本
//　HTMLを読み込むとDomというデータ構造ができる
// そのデータをもとにページが描画される
//　javascriptが操作してるのはDom
//　データ構造自体を操作している
//　HTML自体を操作しているわけではない
//　よってHTMLファイルは書き換えられない
//　HTMLのそれぞれのデータはNodeと呼ばれる
//　documentから始まり、Domツリーと呼ばれる
//　空白や字下げも一つのNodeとして扱われる
//　HTMLの要素を表すNode要素はElementノード(html, body, titleなど)
//　文字列、空白、改行の要素はTextノード
