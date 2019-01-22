<template>
  <div class="frame">
    <div class="frame__background" v-scroll="handleScroll"></div>
    <div class="logo-img-container">
      <!-- <img class="logo-img" src="../../src/assets/tellusium-skeleton.svg" /> -->
    </div>
    <div class="logo-title-container">
      <p class="logo-title">Tellus' Square</p>
      <p class="logo-description">tellusium's portfolio</p>
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
      el.style.transform =
        "translate3d(0px, " + window.scrollY / 2 + "px, 0px)";
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.frame {
  width: 50vw;
  height: 100vh;
  position: relative;
  overflow: hidden;

  &__background {
    width: 100%;
    height: 100%;
    background-image: url('../assets/marble.png');
    background-size: cover;
    background-position: center;
  }
}

.logo-img-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 0;
}

.logo-img {
  width: 150px;
  height: 150px;
  filter: brightness(50%);
}

.logo-title-container {
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;
  position: absolute;
  top: 0;
}

.logo-title {
  font-size: 30px;
  color: #000;
}

.logo-description {
  font-size: 20px;
  color: #000;
  margin-top: 10px;
}
</style>
