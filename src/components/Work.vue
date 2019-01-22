<template>
  <a class="work-container" id="parallax-baseline" v-bind:href="url">
    <div
      class="work-container__background"
      :style="backgroundStyle"
      v-scroll="handleParallaxScroll"
    ></div>
    <div class="work-container__contents">
      <div
        :class="{
          'work-container__contents__caption--half-right':
            !isFullWidth && isRightCaption,
          'work-container__contents__caption--half-left':
            !isFullWidth && !isRightCaption,
          'work-container__contents__caption--row': isRowCaption,
          'work-container__contents__caption': !isRowCaption
        }"
      >
        <p
          :class="{
            'work-container__contents__caption__title--row': isRowCaption,
            'work-container__contents__caption__title': !isRowCaption
          }"
          v-bind:title="title"
        >{{ title }}</p>
        <p
          :class="{
            'work-container__contents__caption__desc--row': isRowCaption,
            'work-container__contents__caption__desc': !isRowCaption
          }"
          v-bind:desc="desc"
        >{{ desc }}</p>
      </div>
    </div>
  </a>
</template>

<script lang="ts">
import Vue from "vue";
import { Consts } from "../components/Constants";

const consts = new Consts();

export default Vue.extend({
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
    return {
      backgroundStyle: {
        backgroundImage: `url(${this.imgurl})`
      },
      isWindowTop: false
    };
  },
  methods: {
    handleParallaxScroll(evt: Event, el: HTMLElement) {
      // let scrollTop = window.scrollY;
      // let windowHeight = window.document.documentElement.clientHeight;
      // let scrollBtm = scrollTop + windowHeight;
      let elementTop = el.closest("#parallax-baseline")!.getBoundingClientRect()
        .top;
      // let elementTop = el.getBoundingClientRect().top;
      // if (windowHeight >= elementTop && elementTop >= -windowHeight) {
      // el.style.transform = "translateY(" + -1 * (elementTop / 2) + "px)";
      el.style.transform =
        "translate3d(0px, " + -1 * (elementTop / 2) + "px, 0px)";
      // el.style.backgroundPosition =
      // "0 " + (windowHeight - elementTop / 2) + "px";
      // }
    },
    handleContainerScroll(evt: Event, el: any) {
      if (window.scrollY >= el.offsetTop) {
        this.isWindowTop = true;
      } else {
        this.isWindowTop = false;
      }
    },
    handleRevealScroll(evt: Event, el: any) {
      var val = 1 - window.scrollY / consts.SCROLL_DIVIDER;
      if (val < 0) val = 0;
      el.style.backgroundColor = "rgba(255, 255, 255, " + val + ")";
    }
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.work-container {
  display: block;
  width: 100vw;
  height: 100vh;
  position: relative;
  text-decoration: none;
  overflow: hidden;

  &__background {
    height: 100%;
    width: 100%;
    background-size: cover;
    background-position: center;
    position: absolute;
    top: 0;
    z-index: -1;
    // transition-duration: 0.02s;
  }

  &__contents {
    height: 100%;

    &__caption {
      height: 100%;
      width: 100%;
      display: flex;
      padding: 40px;
      align-items: flex-start;
      flex-flow: column;
      justify-content: center;
      $caption = selector();
      background-color: rgba(0, 0, 0, 0.5);

      &--half-right {
        @extend {$caption};
        width: 50%;
        margin-right: 0;
        margin-left: auto;
      }

      &--half-left {
        @extend {$caption};
        width: 50%;
      }

      &--row {
        @extend {$caption};
        align-items: center;
        flex-flow: row;
        justify-content: space-between;
      }

      &__title {
        font-size: 40px;
        color: #fff;
        text-align: left;
        $title = selector();

        &--row {
          @extend {$title};
          flex: 1;
        }
      }

      &__desc {
        font-size: 20px;
        color: #fff;
        text-align: left;
        margin-top: 20px;
        $desc = selector();

        &--row {
          @extend {$desc};
          flex: 1;
        }
      }
    }
  }
}
</style>
