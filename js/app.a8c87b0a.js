(function(t){function e(e){for(var n,o,r=e[0],s=e[1],c=e[2],p=0,f=[];p<r.length;p++)o=r[p],a[o]&&f.push(a[o][0]),a[o]=0;for(n in s)Object.prototype.hasOwnProperty.call(s,n)&&(t[n]=s[n]);u&&u(e);while(f.length)f.shift()();return l.push.apply(l,c||[]),i()}function i(){for(var t,e=0;e<l.length;e++){for(var i=l[e],n=!0,r=1;r<i.length;r++){var s=i[r];0!==a[s]&&(n=!1)}n&&(l.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={app:0},l=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=e,r=r.slice();for(var c=0;c<r.length;c++)e(r[c]);var u=s;l.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("cd49")},"04bb":function(t,e,i){},"1fd7":function(t,e,i){t.exports=i.p+"img/qiqiqi.9d9ff396.png"},"25ed":function(t,e,i){t.exports=i.p+"img/sotsuronn.1f3c4ab7.png"},3820:function(t,e,i){t.exports=i.p+"img/espace.3ca138dd.jpeg"},5284:function(t,e,i){"use strict";var n=i("8bf9"),a=i.n(n);a.a},"5e19":function(t,e,i){},"68f9":function(t,e,i){t.exports=i.p+"img/tellusium.9385c6f0.png"},"6ccf":function(t,e,i){t.exports=i.p+"img/mayfesapp.6ed9948f.png"},"6d93":function(t,e,i){"use strict";var n=i("ce35"),a=i.n(n);a.a},"7faf":function(t,e,i){"use strict";var n=i("8fba"),a=i.n(n);a.a},"8bf9":function(t,e,i){},"8fba":function(t,e,i){},9244:function(t,e,i){"use strict";var n=i("04bb"),a=i.n(n);a.a},a3d3:function(t,e,i){},a506:function(t,e,i){t.exports=i.p+"img/peegar.513b2614.png"},a8ff:function(t,e,i){"use strict";var n=i("5e19"),a=i.n(n);a.a},b2b2:function(t,e,i){"use strict";var n=i("a3d3"),a=i.n(n);a.a},bb66:function(t,e,i){},c396:function(t,e,i){t.exports=i.p+"img/morse.303e1cec.png"},cd49:function(t,e,i){"use strict";i.r(e);var n,a,l,o=i("2b0e"),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{staticClass:"container"},[i("About",{staticClass:"container__about"}),i("Profile",{staticClass:"container__profile"})],1),t._l(t.works,function(t,e){return i("Work",{key:e,attrs:{title:t.title,desc:t.desc,url:t.url,imgurl:t.imgurl,isFullWidth:t.isFullWidth,isRowCaption:t.isRowCaption,isRightCaption:t.isRightCaption}})}),i("Articles",{attrs:{articles:t.articles}}),i("Contact")],2)},s=[],c=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"frame"},[i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleScroll,expression:"handleScroll"}],staticClass:"frame__background"}),i("div",{staticClass:"logo-img-container"}),t._m(0)])},u=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"logo-title-container"},[i("p",{staticClass:"logo-title"},[t._v("Tellus' Square")]),i("p",{staticClass:"logo-description"},[t._v("tellusium's portfolio")])])}],p=function(){function t(){this.SCROLL_DIVIDER=600}return t}();(function(t){t[t["Full"]=0]="Full",t[t["Half"]=1]="Half"})(n||(n={})),function(t){t[t["Row"]=0]="Row",t[t["Column"]=1]="Column"}(a||(a={})),function(t){t[t["Right"]=0]="Right",t[t["Left"]=1]="Left"}(l||(l={}));new p;var f=o["a"].extend({name:"About",methods:{handleScroll:function(t,e){e.style.transform="translateY("+window.scrollY/2+"px)"}}}),_=f,d=(i("b2b2"),i("2877")),m=Object(d["a"])(_,c,u,!1,null,"288ed191",null);m.options.__file="About.vue";var h=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"fbox"},[n("img",{staticClass:"fbox__logo-img",attrs:{src:i("68f9")}}),n("p",{staticClass:"fbox__name"},[t._v("@tellusium")]),n("p",{staticClass:"fbox__introduction"},[t._v("\n    Web application engineer"),n("br"),t._v("Smartphone app engineer"),n("br"),t._v("Splatoon 2\n    player\n  ")])])}],g=new p,C=o["a"].extend({name:"Profile",methods:{handleScroll:function(t,e){var i=window.scrollY/g.SCROLL_DIVIDER;i>1&&(i=1),e.style.backgroundColor="rgba(0, 0, 0, "+i+")",e.style.transform="translateY("+window.scrollY/2+"px)"},handleBlurScroll:function(t,e){window.scrollY,g.SCROLL_DIVIDER;e.style.webkitFilter="blur("+scrollY/100+"px)"}}}),w=C,x=(i("a8ff"),Object(d["a"])(w,b,v,!1,null,"fa4ac88a",null));x.options.__file="Profile.vue";var y=x.exports,R=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("a",{staticClass:"work-container",attrs:{id:"parallax-baseline",href:t.url}},[i("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.handleParallaxScroll,expression:"handleParallaxScroll"}],staticClass:"work-container__background",style:t.backgroundStyle}),i("div",{staticClass:"work-container__contents"},[i("div",{class:{"work-container__contents__caption--half-right":!t.isFullWidth&&t.isRightCaption,"work-container__contents__caption--half-left":!t.isFullWidth&&!t.isRightCaption,"work-container__contents__caption--row":t.isRowCaption,"work-container__contents__caption":!t.isRowCaption}},[i("p",{class:{"work-container__contents__caption__title--row":t.isRowCaption,"work-container__contents__caption__title":!t.isRowCaption},attrs:{title:t.title}},[t._v(t._s(t.title))]),i("p",{class:{"work-container__contents__caption__desc--row":t.isRowCaption,"work-container__contents__caption__desc":!t.isRowCaption},attrs:{desc:t.desc}},[t._v(t._s(t.desc))])])])])},k=[],S=new p,O=o["a"].extend({name:"Work",props:["title","desc","imgurl","url","isFullWidth","isRowCaption","isRightCaption"],components:{},data:function(){return{backgroundStyle:{backgroundImage:"url("+this.imgurl+")"},isWindowTop:!1}},methods:{handleParallaxScroll:function(t,e){var i=e.closest("#parallax-baseline").getBoundingClientRect().top;e.style.transform="translateY("+i/2*-1+"px)"},handleContainerScroll:function(t,e){window.scrollY>=e.offsetTop?this.isWindowTop=!0:this.isWindowTop=!1},handleRevealScroll:function(t,e){var i=1-window.scrollY/S.SCROLL_DIVIDER;i<0&&(i=0),e.style.backgroundColor="rgba(255, 255, 255, "+i+")"}}}),A=O,W=(i("9244"),Object(d["a"])(A,R,k,!1,null,"0f78a0a4",null));W.options.__file="Work.vue";var P=W.exports,E=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"frame"},[i("p",{staticClass:"title"},[t._v("Tech Articles")]),i("div",{staticClass:"articles-container"},t._l(t.articles,function(t,e){return i("Article",{key:e,staticClass:"article",attrs:{date:t.date,title:t.title,url:t.url}})}),1)])},j=[],F=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"article"},[i("a",{staticClass:"article__link",attrs:{href:t.url}},[i("div",{staticClass:"article__flexbox"},[i("p",{staticClass:"article__flexbox__date"},[t._v(t._s(t.date))]),i("p",{staticClass:"article__flexbox__title"},[t._v(t._s(t.title))])])])])},I=[],L=(new p,o["a"].extend({name:"Article",props:["date","title","url"]})),D=L,T=(i("5284"),Object(d["a"])(D,F,I,!1,null,"b04bfa42",null));T.options.__file="Article.vue";var Y=T.exports,$=(new p,o["a"].extend({name:"Articles",props:["articles"],components:{Article:Y}})),q=$,M=(i("6d93"),Object(d["a"])(q,E,j,!1,null,"564abf76",null));M.options.__file="Articles.vue";var H=M.exports,V=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"contact"},[i("p",{staticClass:"contact__title"},[t._v("Contact List")]),i("div",{staticClass:"contact__fbox"},[i("a",{staticClass:"contact__fbox__item",attrs:{href:"https://twitter.com/tellusium"}},[i("i",{staticClass:"fab fa-twitter contact__fbox__item__icon"})]),i("a",{staticClass:"contact__fbox__item",attrs:{href:"https://github.com/ta21cos"}},[i("i",{staticClass:"fab fa-github-alt contact__fbox__item__icon"})]),i("a",{staticClass:"contact__fbox__item",attrs:{href:"https://tellusium.hatenablog.com/"}},[i("i",{staticClass:"fas fa-blog contact__fbox__item__icon"})])])])}],B=o["a"].extend({name:"Contact"}),G=B,Q=(i("f891"),Object(d["a"])(G,V,J,!1,null,"3f22e31e",null));Q.options.__file="Contact.vue";var N=Q.exports;o["a"].directive("scroll",{inserted:function(t,e){var i=function(n){e.value(n,t)&&window.removeEventListener("scroll",i)};window.addEventListener("scroll",i)}});var z=o["a"].extend({name:"app",components:{About:h,Profile:y,Work:P,Articles:H,Contact:N},data:function(){return{works:[{title:"MayfesApp",desc:"\n            五月祭と呼ばれる学園祭の案内アプリケーションです．\n            マップや文字での企画検索，企画のお気に入り・スケジュール登録が行えます．\n            GPSと連動し，特定の場所に行くとマスコットキャラクターの壁紙がもらえるなどのおまけ機能も搭載しています．\n          ",imgurl:i("6ccf"),url:"https://gogatsusai.jp/90/visitor/app.html",isFullWidth:!0,isRowCaption:!0,isRightCaption:!1},{title:"Qiita Infovis",desc:"\n            Qiitaという技術記事投稿サイトの記事についている「タグ」の共起関係を可視化したシステムです．\n          ",imgurl:i("1fd7"),url:"https://qiita.com/tellusium/items/91ada7c868e4f0a140af",isFullWidth:!1,isRowCaption:!1,isRightCaption:!1},{title:"Schematics / Breadboard converter",desc:"\n            卒業論文で製作した「回路図の画像からブレッドボード向け実体配線図を自動生成するシステム」のプロトタイプです．\n            プロトタイプなため，文字ベースの出力のみ行うことができます．\n          ",imgurl:i("25ed"),url:"http://iis-lab.org/research/circuitgeneration/",isFullWidth:!0,isRowCaption:!1,isRightCaption:!0},{title:"Peegar website",desc:'\n            学科同期が製作した簡易プロトタイピングシステム "Peegar" のWebサイトです．\n          ',imgurl:i("a506"),url:"http://peegar.com/",isFullWidth:!1,isRowCaption:!1,isRightCaption:!0},{title:"Espace",desc:'\n            迫り来る隕石から逃げ続けるというゲームです．\n            徐々に早くなる隕石から1分逃げ切れればゲームクリア．\n            Can you escape from "espace"?\n          ',imgurl:i("3820"),url:"https://github.com/ta21cos/espace",isFullWidth:!1,isRowCaption:!1,isRightCaption:!1},{title:"Morse transmitter / receiver",desc:"\n            アナログ回路を中心に製作したモールス信号送信・受信機です．\n            特定の周波数の音声信号に載せられたモールス信号を受信・送信できます．\n            信号処理はアナログ回路で，対応する文字の解析はPICマイコンを用いて行なっています．\n          ",imgurl:i("c396"),url:"",isFullWidth:!0,isRowCaption:!1,isRightCaption:!0}],articles:[{date:"2019-01-15",title:"JavaScriptで要素をスクロール連動させたい時の基本知識",url:"https://tellusium.hatenablog.com/entry/2019/01/15/204849"},{date:"2018-12-23",title:"brainfxckで輝夜月風の言語を作ってみた",url:"https://tellusium.hatenablog.com/entry/2018/12/16/192815"},{date:"2018-12-16",title:"アプリを作っていきたいと思います．",url:"https://tellusium.hatenablog.com/entry/2018/12/16/192815"},{date:"2018-11-10",title:"クリップボードの内容を勝手に使ってくれるシェルコマンドの自作",url:"https://tellusium.hatenablog.com/entry/2018/11/10/205922"},{date:"2018-09-30",title:"Storyboardとxibを使ってViewを小分けで管理する",url:"https://tellusium.hatenablog.com/entry/2018/09/30/183523"},{date:"2018-09-12",title:"サイボウズのサマーインターンシップに参加してきました",url:"https://tellusium.hatenablog.com/entry/2018/09/12/160034"},{date:"2018-07-09",title:"TrelloのUIを透明化するChrome拡張機能を作る",url:"https://tellusium.hatenablog.com/entry/2018/07/09/173139"},{date:"2018-06-26",title:"正規表現の最短マッチングにおける'?'についての瑣末な話",url:"https://tellusium.hatenablog.com/entry/2018/06/26/150637"},{date:"2018-05-26",title:"今日更新されたYouTube動画を（ほぼ）自動でiPhoneにダウンロードしたい",url:"https://tellusium.hatenablog.com/entry/2018/02/28/143842"},{date:"2018-02-12",title:"PlatformIOでArduinoの純正IDEから卒業する",url:"https://tellusium.hatenablog.com/entry/2018/02/12/135327"},{date:"2017-12-20",title:"実験でQiita記事のタグ情報を可視化した話",url:"https://qiita.com/tellusium/items/91ada7c868e4f0a140af"},{date:"2017-10-16",title:"シェルスクリプトを使ってGitHubの特定のOrganizationの持つリポジトリを全てCloneしたい",url:"https://tellusium.hatenablog.com/entry/2017/10/16/111504"},{date:"2017-07-04",title:"OpenAI Gym を動かしてみた",url:"https://tellusium.hatenablog.com/entry/2017/07/04/234956"},{date:"2017-03-21",title:"AnalogDiscovery2を使ってみた",url:"https://tellusium.hatenablog.com/entry/2017/03/21/122448"},{date:"2016-12-20",title:"Arduino未満，HDL以上．〜マイコンプログラミング入門 その2 プログラミング編〜",url:"https://qiita.com/tellusium/items/f38f7ae55370d3739dc5"},{date:"2016-12-20",title:"Arduino未満，HDL以上．〜マイコンプログラミング入門 その1 環境構築編〜",url:"https://qiita.com/tellusium/items/8abfcc15c1318bdfc684"},{date:"2016-11-06",title:"Firefox自身のJavaScriptをデバッグする",url:"https://qiita.com/tellusium/items/f5ff3876c11e9c2d50e6"},{date:"2016-11-05",title:"Firefoxのソースを手探ってみる",url:"https://qiita.com/tellusium/items/9cac5cd71672195752ca"}]}}}),U=z,K=(i("7faf"),Object(d["a"])(U,r,s,!1,null,null,null));K.options.__file="App.vue";var X=K.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(X)}}).$mount("#app")},ce35:function(t,e,i){},f891:function(t,e,i){"use strict";var n=i("bb66"),a=i.n(n);a.a}});
//# sourceMappingURL=app.a8c87b0a.js.map