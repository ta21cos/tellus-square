<template>
  <div class="fbox">
    <img class="fbox__logo-img" src="../assets/tellusium.png" />
    <p class="fbox__name">@tellusium</p>
    <p class="fbox__introduction">
      Web application engineer<br />Smartphone app engineer<br />Splatoon 2
      player
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Consts } from "../components/Constants";

let consts = new Consts();

export default Vue.extend({
  name: "Profile",
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
.fbox {
  width: 50%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: column;

  &__logo-img {
    width: 130px;
    height: 130px;
  }

  &__name {
      font-size: 25px;
      font-weight: bold;
      color: #000;
      margin-top: 10px;
  }

  &__introduction {
      font-size: 15px;
      color: #000;
      margin-top: 10px;
  }
}
</style>
