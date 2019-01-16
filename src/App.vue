<template>
  <div id="app">
    <div class="container">
      <About class="container__about" />
      <Profile class="container__profile" />
    </div>
    <Work
      v-for="(work, index) in works"
      :key="index"
      :title="work.title"
      :desc="work.desc"
      :url="work.url"
      :imgurl="work.imgurl"
      :isFullWidth="work.isFullWidth"
      :isRowCaption="work.isRowCaption"
      :isRightCaption="work.isRightCaption"
    />
    <Articles :articles="articles" />
    <Contact />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import Profile from "./components/Profile.vue";
import Work from "./components/Work.vue";
import Articles from "./components/Articles.vue";
import Contact from "./components/Contact.vue";
import {
  Consts,
  ContainerType,
  ContainerWidth,
  CaptionFlow,
  CaptionPosition
} from "./components/Constants";

// custom directive for scroll
Vue.directive("scroll", {
  inserted: function(el, binding) {
    let f = function(evt: Event) {
      if (binding.value(evt, el)) {
        window.removeEventListener("scroll", f);
      }
    };
    window.addEventListener("scroll", f);
  }
});

export default Vue.extend({
  name: "app",
  components: {
    About,
    Profile,
    Work,
    Articles,
    Contact
  },
  data: function() {
    return {
      works: [
        {
          title: "MayfesApp",
          desc: `
            五月祭と呼ばれる学園祭の案内アプリケーションです．
            マップや文字での企画検索，企画のお気に入り・スケジュール登録が行えます．
            GPSと連動し，特定の場所に行くとマスコットキャラクターの壁紙がもらえるなどのおまけ機能も搭載しています．
          `,
          imgurl: require("./assets/mayfesapp.png"),
          url: "https://gogatsusai.jp/90/visitor/app.html",
          isFullWidth: true,
          isRowCaption: true,
          isRightCaption: false
        },
        {
          title: "Qiita Infovis",
          desc: `
            Qiitaという技術記事投稿サイトの記事についている「タグ」の共起関係を可視化したシステムです．
          `,
          imgurl: require("./assets/qiqiqi.png"),
          url: "https://qiita.com/tellusium/items/91ada7c868e4f0a140af",
          isFullWidth: false,
          isRowCaption: false,
          isRightCaption: false
        },
        {
          title: "Schematics / Breadboard converter",
          desc: `
            卒業論文で製作した「回路図の画像からブレッドボード向け実体配線図を自動生成するシステム」のプロトタイプです．
            プロトタイプなため，文字ベースの出力のみ行うことができます．
          `,
          imgurl: require("./assets/sotsuronn.png"),
          url: "http://iis-lab.org/research/circuitgeneration/",
          isFullWidth: true,
          isRowCaption: false,
          isRightCaption: true
        },
        {
          title: "Peegar website",
          desc: `
            学科同期が製作した簡易プロトタイピングシステム "Peegar" のWebサイトです．
          `,
          imgurl: require("./assets/peegar.png"),
          url: "http://peegar.com/",
          isFullWidth: false,
          isRowCaption: false,
          isRightCaption: true
        },
        {
          title: "Espace",
          desc: `
            迫り来る隕石から逃げ続けるというゲームです．
            徐々に早くなる隕石から1分逃げ切れればゲームクリア．
            Can you escape from "espace"?
          `,
          imgurl: require("./assets/espace.jpeg"),
          url: "https://github.com/ta21cos/espace",
          isFullWidth: false,
          isRowCaption: false,
          isRightCaption: false
        },
        {
          title: "Morse transmitter / receiver",
          desc: `
            アナログ回路を中心に製作したモールス信号送信・受信機です．
            特定の周波数の音声信号に載せられたモールス信号を受信・送信できます．
            信号処理はアナログ回路で，対応する文字の解析はPICマイコンを用いて行なっています．
          `,
          imgurl: require("./assets/morse.png"),
          url: "",
          isFullWidth: true,
          isRowCaption: false,
          isRightCaption: true
        }
      ],
      articles: [
        {
          date: '2019-01-15',
          title: 'JavaScriptで要素をスクロール連動させたい時の基本知識',
          url: 'https://tellusium.hatenablog.com/entry/2019/01/15/204849'
        },
        {
          date: "2018-12-23",
          title: "brainfxckで輝夜月風の言語を作ってみた",
          url: "https://tellusium.hatenablog.com/entry/2018/12/16/192815"
        },
        {
          date: "2018-12-16",
          title: "アプリを作っていきたいと思います．",
          url: "https://tellusium.hatenablog.com/entry/2018/12/16/192815"
        },
        {
          date: "2018-11-10",
          title: "クリップボードの内容を勝手に使ってくれるシェルコマンドの自作",
          url: "https://tellusium.hatenablog.com/entry/2018/11/10/205922"
        },
        {
          date: "2018-09-30",
          title: "Storyboardとxibを使ってViewを小分けで管理する",
          url: "https://tellusium.hatenablog.com/entry/2018/09/30/183523"
        },
        {
          date: "2018-09-12",
          title: "サイボウズのサマーインターンシップに参加してきました",
          url: "https://tellusium.hatenablog.com/entry/2018/09/12/160034"
        },
        {
          date: "2018-07-09",
          title: "TrelloのUIを透明化するChrome拡張機能を作る",
          url: "https://tellusium.hatenablog.com/entry/2018/07/09/173139"
        },
        {
          date: "2018-06-26",
          title: "正規表現の最短マッチングにおける'?'についての瑣末な話",
          url: "https://tellusium.hatenablog.com/entry/2018/06/26/150637"
        },
        {
          date: "2018-05-26",
          title:
            "今日更新されたYouTube動画を（ほぼ）自動でiPhoneにダウンロードしたい",
          url: "https://tellusium.hatenablog.com/entry/2018/02/28/143842"
        },
        {
          date: "2018-02-12",
          title: "PlatformIOでArduinoの純正IDEから卒業する",
          url: "https://tellusium.hatenablog.com/entry/2018/02/12/135327"
        },
        {
          date: "2017-12-20",
          title: "実験でQiita記事のタグ情報を可視化した話",
          url: "https://qiita.com/tellusium/items/91ada7c868e4f0a140af"
        },
        {
          date: "2017-10-16",
          title:
            "シェルスクリプトを使ってGitHubの特定のOrganizationの持つリポジトリを全てCloneしたい",
          url: "https://tellusium.hatenablog.com/entry/2017/10/16/111504"
        },
        {
          date: "2017-07-04",
          title: "OpenAI Gym を動かしてみた",
          url: "https://tellusium.hatenablog.com/entry/2017/07/04/234956"
        },
        {
          date: "2017-03-21",
          title: "AnalogDiscovery2を使ってみた",
          url: "https://tellusium.hatenablog.com/entry/2017/03/21/122448"
        },
        {
          date: "2016-12-20",
          title:
            "Arduino未満，HDL以上．〜マイコンプログラミング入門 その2 プログラミング編〜",
          url: "https://qiita.com/tellusium/items/f38f7ae55370d3739dc5"
        },
        {
          date: "2016-12-20",
          title:
            "Arduino未満，HDL以上．〜マイコンプログラミング入門 その1 環境構築編〜",
          url: "https://qiita.com/tellusium/items/8abfcc15c1318bdfc684"
        },
        {
          date: "2016-11-06",
          title: "Firefox自身のJavaScriptをデバッグする",
          url: "https://qiita.com/tellusium/items/f5ff3876c11e9c2d50e6"
        },
        {
          date: "2016-11-05",
          title: "Firefoxのソースを手探ってみる",
          url: "https://qiita.com/tellusium/items/9cac5cd71672195752ca"
        }
        // {
        //   date: "2017-10-16",
        //   title: "",
        //   url: ""
        // },
      ]
    };
  }
});
</script>
<style lang="stylus">
body, p {
  margin: 0;
  padding: 0;
}

*, *:before, *:after {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -o-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.container {
  display: flex;

  &__about {
    flex: 1;
  }
  &__profile {
    flex: 1;
  }
}
</style>
