<template>
  <div class="frame" v-scroll="handleDarkScroll">
    <div class="logo-img-container">
      <img class="logo-img" src="../../src/assets/tellusium-skeleton.svg">
    </div>
    <div class="logo-title-container">
      <p class="logo-title">terra(')s house</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import * as Consts from "../components/Constants";

export default Vue.extend({
  name: "About",
  methods: {
    handleDarkScroll(evt: Event, el: any) {
      var val = window.scrollY / Consts.SCROLL_DIVIDER;
      if (val > 1) val = 1;
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
