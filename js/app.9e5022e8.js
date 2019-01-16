(function(e) {
  function t(t) {
    for (
      var r, a, l = t[0], s = t[1], c = t[2], p = 0, v = [];
      p < l.length;
      p++
    )
      (a = l[p]), o[a] && v.push(o[a][0]), (o[a] = 0);
    for (r in s) Object.prototype.hasOwnProperty.call(s, r) && (e[r] = s[r]);
    u && u(t);
    while (v.length) v.shift()();
    return i.push.apply(i, c || []), n();
  }
  function n() {
    for (var e, t = 0; t < i.length; t++) {
      for (var n = i[t], r = !0, l = 1; l < n.length; l++) {
        var s = n[l];
        0 !== o[s] && (r = !1);
      }
      r && (i.splice(t--, 1), (e = a((a.s = n[0]))));
    }
    return e;
  }
  var r = {},
    o = { app: 0 },
    i = [];
  function a(t) {
    if (r[t]) return r[t].exports;
    var n = (r[t] = { i: t, l: !1, exports: {} });
    return e[t].call(n.exports, n, n.exports, a), (n.l = !0), n.exports;
  }
  (a.m = e),
    (a.c = r),
    (a.d = function(e, t, n) {
      a.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: n });
    }),
    (a.r = function(e) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
        Object.defineProperty(e, "__esModule", { value: !0 });
    }),
    (a.t = function(e, t) {
      if ((1 & t && (e = a(e)), 8 & t)) return e;
      if (4 & t && "object" === typeof e && e && e.__esModule) return e;
      var n = Object.create(null);
      if (
        (a.r(n),
        Object.defineProperty(n, "default", { enumerable: !0, value: e }),
        2 & t && "string" != typeof e)
      )
        for (var r in e)
          a.d(
            n,
            r,
            function(t) {
              return e[t];
            }.bind(null, r)
          );
      return n;
    }),
    (a.n = function(e) {
      var t =
        e && e.__esModule
          ? function() {
              return e["default"];
            }
          : function() {
              return e;
            };
      return a.d(t, "a", t), t;
    }),
    (a.o = function(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t);
    }),
    (a.p = "");
  var l = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = l.push.bind(l);
  (l.push = t), (l = l.slice());
  for (var c = 0; c < l.length; c++) t(l[c]);
  var u = s;
  i.push([0, "chunk-vendors"]), n();
})({
  0: function(e, t, n) {
    e.exports = n("cd49");
  },
  "10ae": function(e, t, n) {
    e.exports = n.p + "img/tellusium-skeleton.abb4ca6d.svg";
  },
  "1fd7": function(e, t, n) {
    e.exports = n.p + "img/qiqiqi.79efc136.png";
  },
  3820: function(e, t, n) {
    e.exports = n.p + "img/espace.3ca138dd.jpeg";
  },
  5373: function(e, t, n) {},
  "7faf": function(e, t, n) {
    "use strict";
    var r = n("8fba"),
      o = n.n(r);
    o.a;
  },
  8359: function(e, t, n) {
    "use strict";
    var r = n("5373"),
      o = n.n(r);
    o.a;
  },
  "8fba": function(e, t, n) {},
  a38f: function(e, t, n) {
    e.exports = n.p + "img/morse.8b7d640c.jpg";
  },
  a506: function(e, t, n) {
    e.exports = n.p + "img/peegar.bfc7b664.png";
  },
  c5ac: function(e, t, n) {},
  c680: function(e, t, n) {
    "use strict";
    var r = n("f542"),
      o = n.n(r);
    o.a;
  },
  cd49: function(e, t, n) {
    "use strict";
    n.r(t);
    var r = n("2b0e"),
      o = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n(
          "div",
          { attrs: { id: "app" } },
          [
            n("About"),
            e._l(e.works, function(e) {
              return n("Work", {
                key: e.id,
                attrs: {
                  title: e.title,
                  desc: e.desc,
                  url: e.url,
                  imgurl: e.imgurl,
                  isFullWidth: e.isFullWidth,
                  isRowCaption: e.isRowCaption,
                  isRightCaption: e.isRightCaption
                }
              });
            })
          ],
          2
        );
      },
      i = [],
      a = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "hello" }, [
          n("h1", [e._v(e._s(e.msg))]),
          e._m(0),
          n("h3", [e._v("Installed CLI Plugins")]),
          e._m(1),
          n("h3", [e._v("Essential Links")]),
          e._m(2),
          n("h3", [e._v("Ecosystem")]),
          e._m(3)
        ]);
      },
      l = [
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("p", [
            e._v(
              "\n    For a guide and recipes on how to configure / customize this project,"
            ),
            n("br"),
            e._v("\n    check out the\n    "),
            n(
              "a",
              {
                attrs: {
                  href: "https://cli.vuejs.org",
                  target: "_blank",
                  rel: "noopener"
                }
              },
              [e._v("vue-cli documentation")]
            ),
            e._v(".\n  ")
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("ul", [
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href:
                      "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-typescript",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("typescript")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href:
                      "https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-eslint",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("eslint")]
              )
            ])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("ul", [
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Core Docs")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://forum.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Forum")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://chat.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Community Chat")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://twitter.com/vuejs",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("Twitter")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://news.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("News")]
              )
            ])
          ]);
        },
        function() {
          var e = this,
            t = e.$createElement,
            n = e._self._c || t;
          return n("ul", [
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://router.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-router")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://vuex.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vuex")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/vue-devtools#vue-devtools",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-devtools")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://vue-loader.vuejs.org",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("vue-loader")]
              )
            ]),
            n("li", [
              n(
                "a",
                {
                  attrs: {
                    href: "https://github.com/vuejs/awesome-vue",
                    target: "_blank",
                    rel: "noopener"
                  }
                },
                [e._v("awesome-vue")]
              )
            ])
          ]);
        }
      ],
      s = r["a"].extend({ name: "HelloWorld", props: { msg: String } }),
      c = s,
      u = (n("8359"), n("2877")),
      p = Object(u["a"])(c, a, l, !1, null, "8112a882", null);
    p.options.__file = "HelloWorld.vue";
    var v,
      d,
      _,
      f = p.exports,
      h = function() {
        var e = this,
          t = e.$createElement,
          r = e._self._c || t;
        return r(
          "div",
          {
            directives: [
              {
                name: "scroll",
                rawName: "v-scroll",
                value: e.handleScroll,
                expression: "handleScroll"
              }
            ],
            staticClass: "frame"
          },
          [
            r(
              "div",
              {
                directives: [
                  {
                    name: "scroll",
                    rawName: "v-scroll",
                    value: e.handleBlurScroll,
                    expression: "handleBlurScroll"
                  }
                ],
                staticClass: "logo-img-container"
              },
              [r("img", { staticClass: "logo-img", attrs: { src: n("10ae") } })]
            ),
            r(
              "div",
              {
                directives: [
                  {
                    name: "scroll",
                    rawName: "v-scroll",
                    value: e.handleBlurScroll,
                    expression: "handleBlurScroll"
                  }
                ],
                staticClass: "logo-title-container"
              },
              [r("p", { staticClass: "logo-title" }, [e._v("terra(')s house")])]
            )
          ]
        );
      },
      g = [],
      m = (function() {
        function e() {
          this.SCROLL_DIVIDER = 600;
        }
        return e;
      })();
    (function(e) {
      (e[(e["Full"] = 0)] = "Full"), (e[(e["Half"] = 1)] = "Half");
    })(v || (v = {})),
      (function(e) {
        (e[(e["Row"] = 0)] = "Row"), (e[(e["Column"] = 1)] = "Column");
      })(d || (d = {})),
      (function(e) {
        (e[(e["Right"] = 0)] = "Right"), (e[(e["Left"] = 1)] = "Left");
      })(_ || (_ = {}));
    var b = new m(),
      w = r["a"].extend({
        name: "About",
        methods: {
          handleScroll: function(e, t) {
            var n = window.scrollY / b.SCROLL_DIVIDER;
            n > 1 && (n = 1),
              (t.style.backgroundColor = "rgba(0, 0, 0, " + n + ")"),
              (t.style.transform = "translateY(" + window.scrollY / 2 + "px)");
          },
          handleBlurScroll: function(e, t) {
            window.scrollY, b.SCROLL_DIVIDER;
            t.style.webkitFilter = "blur(" + scrollY / 100 + "px)";
          }
        }
      }),
      C = w,
      k = (n("c680"), Object(u["a"])(C, h, g, !1, null, "271d556e", null));
    k.options.__file = "About.vue";
    var R = k.exports,
      y = function() {
        var e = this,
          t = e.$createElement,
          n = e._self._c || t;
        return n("div", { staticClass: "container" }, [
          n("a", { staticClass: "container__link", attrs: { href: e.url } }, [
            n("div", {
              directives: [
                {
                  name: "scroll",
                  rawName: "v-scroll",
                  value: e.handleRevealScroll,
                  expression: "handleRevealScroll"
                }
              ],
              staticClass: "container__cover"
            }),
            n("div", { staticClass: "container__contents" }, [
              n(
                "div",
                {
                  staticClass: "container__contents__background",
                  style: e.backgroundStyle
                },
                [
                  n("div", {
                    staticClass: "container__contents__background__filter"
                  })
                ]
              ),
              n(
                "div",
                {
                  class: {
                    "container__contents__caption--half-right":
                      !e.isFullWidth && e.isRightCaption,
                    "container__contents__caption--half-left":
                      !e.isFullWidth && !e.isRightCaption,
                    "container__contents__caption--row": e.isRowCaption,
                    container__contents__caption: !e.isRowCaption
                  }
                },
                [
                  n(
                    "p",
                    {
                      class: {
                        "container__contents__caption__title--row":
                          e.isRowCaption,
                        container__contents__caption__title: !e.isRowCaption
                      },
                      attrs: { title: e.title }
                    },
                    [e._v(e._s(e.title))]
                  ),
                  n(
                    "p",
                    {
                      class: {
                        "container__contents__caption__desc--row":
                          e.isRowCaption,
                        container__contents__caption__desc: !e.isRowCaption
                      },
                      attrs: { desc: e.desc }
                    },
                    [e._v(e._s(e.desc))]
                  )
                ]
              )
            ])
          ])
        ]);
      },
      j = [],
      x = new m(),
      S = r["a"].extend({
        name: "Work",
        props: [
          "title",
          "desc",
          "imgurl",
          "url",
          "isFullWidth",
          "isRowCaption",
          "isRightCaption"
        ],
        components: {},
        data: function() {
          return (
            console.log("../../src/assets/espace.jpeg" === this.imgurl),
            { backgroundStyle: { backgroundImage: "url(" + this.imgurl + ")" } }
          );
        },
        methods: {
          handleRevealScroll: function(e, t) {
            var n = 1 - window.scrollY / x.SCROLL_DIVIDER;
            n < 0 && (n = 0),
              (t.style.backgroundColor = "rgba(255, 255, 255, " + n + ")");
          }
        }
      }),
      E = S,
      O = (n("d06b"), Object(u["a"])(E, y, j, !1, null, "3924bfe8", null));
    O.options.__file = "Work.vue";
    var W = O.exports;
    r["a"].directive("scroll", {
      inserted: function(e, t) {
        var n = function(r) {
          t.value(r, e) && window.removeEventListener("scroll", n);
        };
        window.addEventListener("scroll", n);
      }
    });
    var F = r["a"].extend({
        name: "app",
        components: { HelloWorld: f, About: R, Work: W },
        data: function() {
          return {
            works: [
              {
                id: 0,
                title: "Espace",
                desc:
                  "An shooting game to avoid meteors approaching from all directions. Can you escape from this “espace”?",
                imgurl: n("3820"),
                url: "#",
                isFullWidth: !1,
                isRowCaption: !1,
                isRightCaption: !0
              },
              {
                id: 1,
                title: "Peegar website",
                desc:
                  "Created a website of Peegar, a super easy hardware development system.",
                imgurl: n("a506"),
                url: "#",
                isFullWidth: !0,
                isRowCaption: !0,
                isRightCaption: !0
              },
              {
                id: 2,
                title: "Qiita Infovis",
                desc:
                  "Created a website of Peegar, a super easy hardware development system.",
                imgurl: n("1fd7"),
                url: "#",
                isFullWidth: !1,
                isRowCaption: !1,
                isRightCaption: !1
              },
              {
                id: 3,
                title: "Morse transmitter / receiver",
                desc:
                  "Created a website of Peegar, a super easy hardware development system.",
                imgurl: n("a38f"),
                url: "#",
                isFullWidth: !0,
                isRowCaption: !1,
                isRightCaption: !0
              }
            ]
          };
        }
      }),
      L = F,
      I = (n("7faf"), Object(u["a"])(L, o, i, !1, null, null, null));
    I.options.__file = "App.vue";
    var P = I.exports;
    (r["a"].config.productionTip = !1),
      new r["a"]({
        render: function(e) {
          return e(P);
        }
      }).$mount("#app");
  },
  d06b: function(e, t, n) {
    "use strict";
    var r = n("c5ac"),
      o = n.n(r);
    o.a;
  },
  f542: function(e, t, n) {}
});
//# sourceMappingURL=app.9e5022e8.js.map
