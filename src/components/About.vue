<template>
  <div class="frame" v-scroll="handleScroll">
    <div class="logo-img-container" v-scroll="handleBlurScroll">
      <img class="logo-img" src="../../src/assets/tellusium-skeleton.svg" />
    </div>
    <div class="logo-title-container" v-scroll="handleBlurScroll">
      <p class="logo-title">terra(')s house</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Consts } from "../components/Constants";

const consts = new Consts();

export default Vue.extend({
  name: "About",
  methods: {
    handleScroll(evt: Event, el: any) {
      var val = window.scrollY / consts.SCROLL_DIVIDER;
      if (val > 1) val = 1;
      el.style.backgroundColor = "rgba(0, 0, 0, " + val + ")";

      el.style.transform = "translateY(" + window.scrollY / 2 + "px)";
    },
    handleBlurScroll(evt: Event, el: any) {
      let scale = 1 - window.scrollY / consts.SCROLL_DIVIDER;
      el.style.webkitFilter = "blur(" + scrollY / 100 + "px)";
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
