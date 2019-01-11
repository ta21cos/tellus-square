<template>
  <div id="app">
    <About/>
    <Work
      v-for="work in works"
      :key="work.id"
      :title="work.title"
      :desc="work.desc"
      :url="work.url"
      :imgurl="work.imgurl"
      :isFullWidth="work.isFullWidth"
      :isRowCaption="work.isRowCaption"
      :isRightCaption="work.isRightCaption"
    />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import About from "./components/About.vue";
import Work from "./components/Work.vue";
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
    HelloWorld,
    About,
    Work
  },
  data: function() {
    return {
      works: [
        {
          id: 0,
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
          id: 1,
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
          id: 2,
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
          id: 3,
          title: "Morse transmitter / receiver",
          desc:
            "Created a website of Peegar, a super easy hardware development system.",
          imgurl: require("./assets/morse.jpg"),
          url: "#",
          isFullWidth: true,
          isRowCaption: false,
          isRightCaption: true
        }
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
</style>
