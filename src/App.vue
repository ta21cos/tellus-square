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
          title: "Espace",
          desc:
            "An shooting game to avoid meteors approaching from all directions. Can you escape from this “espace”?",
          imgurl: require("./assets/espace.jpeg"),
          url: "#",
          isFullWidth: false,
          isRowCaption: false,
          isRightCaption: true
        },
        {
          title: "Peegar website",
          desc:
            "Created a website of Peegar, a super easy hardware development system.",
          imgurl: require("./assets/peegar.png"),
          url: "#",
          isFullWidth: true,
          isRowCaption: true,
          isRightCaption: true
        },
        {
          title: "Qiita Infovis",
          desc:
            "Created a website of Peegar, a super easy hardware development system.",
          imgurl: require("./assets/qiqiqi.png"),
          url: "#",
          isFullWidth: false,
          isRowCaption: false,
          isRightCaption: false
        },
        {
          title: "Morse transmitter / receiver",
          desc:
            "Created a website of Peegar, a super easy hardware development system.",
          imgurl: require("./assets/morse.jpg"),
          url: "#",
          isFullWidth: true,
          isRowCaption: false,
          isRightCaption: true
        }
      ],
      articles: [
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
