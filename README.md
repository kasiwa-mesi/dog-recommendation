# 犬画像検索 - Dog APIを使って、好きな犬を見つけよう!!!!!

## 開発期間

- 2022/7/14 - 7/19の6日間

## 技術要件

- React
- API
  - Dog APIを使って、犬の画像を取得。
- コンポーネント設計  
  - Atomic Designを参考。

## 犬画像検索を通して身につけようと試みた技術

### Reactの基礎

WebフロントではVueを愛用していたので、ほとんどReactを触ったことがなかった。
Reactを触った体感としては、コンポーネント分けがFlutterに非常に似ていたため、快適だった。

**※下記のReact, Flutterのコンポーネント参考**

#### Reactのコンポーネント
~~~
function Button() {

}

export default Button;
~~~

#### Flutterのコンポーネント
~~~
class Button extends StatelessWidget {

}
~~~

### Atomic Designをベースとしたコンポーネント設計

- src:
  - api: Dog APIを使って、犬の画像を取得する処理を記述してます。
  - atoms: ボタン、画像といった複数回使うコンポーネント
  - molecules: atomsを使った小さいコンポーネント
    - ex: 画像を並べるGalleryコンポーネント
  - organisms: Header, Footerといった大きいコンポーネント
  - pages: organismsを並べて、1つのページを作る

## 開発中に気をつけたこと

### 無駄なconsole.log, コメントアウトを削除する
個人開発では構わないが、チーム開発だと必要ではないものは削除した方がいいと思い、
今回は、意識的にconsole.logの削除を徹底した。

### id要素をできる限り使わない
CSSの詳細度が高い。かつ、idは1つのページで複数回使うことができない。
従って、予期しない問題が起きるidを使うよりもclassを利用する方が適切

## 反省点

- CSSの記述に統一性がない
  - css/のディレクトリ下に全て書くのか。コンポーネントにstyleを書いていくのか。
  - → 適切な判断ができず、混雑した状態ある。
  - **reactでのCSSの扱い方をキャッチアップしていきたい。**
    - Pure CSS, CSS in JS(Styled Components, Emotion)も導入してみたい。


- Atomic Designの粒度の境界を決めることが難しい
  - 今回のサービスは1ページのみなので、問題は起きなかった。
  - しかし、チームで開発する場合、複数ページで使う要素のコンポーネントの設計は重要。
  - **特に、atomsとmoleculesの境界を分けることが難しい。**


## Deploy

このサイトは次の url にて公開しています。

参考 URL: [犬画像検索](https://dog-recommendation.netlify.app/)


## 総評

Vueは書いたことがあるが、Reactをしっかり書くのは今回初めてだった。
コードの書き心地はFlutterに近いので、違和感は無かった。

技術を身につけるために、ログイン(認証機能)を備えた小規模のサービスをReact(TypeScript)で開発したい。