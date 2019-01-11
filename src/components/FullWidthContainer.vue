<template>
  <div class="flex-container">
    <div :style="flex-container__bgContainer">
      <div :style="flex-container__bgContainer__bgFilter"></div>
    </div>
    <div v-bind:style="caption-container">
      <p v-bind:style="caption-container__title" v-bind:title="title">{{ title }}</p>
      <p v-bind:style="caption-container__desc" v-bind:desc="desc">{{ desc }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import FullWidthContainer from "./components/FullWidthContainer.vue";
import HalfWidthContainer from "./components/HalfWidthContainer.vue";

export default Vue.extend({
  name: "About",
  props: ["title", "desc", "imgsrc", "url", "type", "pos"],
  components: {
    FullWidthContainer,
    HalfWidthContainer
  },
  methods: {
    handleRevealScroll(evt: Event, el: any) {
      var val = 1 - window.scrollY / 500;
      if (val < 0) val = 0;
      el.style.backgroundColor = "rgba(0, 0, 0, " + val + ")";
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.frame {
  width: 100vw;
  height: 100vh;
  position: relative;
}

.logo-img-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.logo-img {
  width: 70px;
  height: 70px;
}

.logo-title-container {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.logo-title {
  font-size: 20px;
  color: #000;
}
</style>
