<template>
  <div class="container">
    <a class="container__link" v-bind:href="url">
      <div class="container__cover" v-scroll="handleRevealScroll"></div>
      <div class="container__contents">
        <div class="container__contents__background" :style="backgroundStyle">
          <div class="container__contents__background__filter"></div>
        </div>
        <div
          :class="{
            'container__contents__caption--half-right':
              !isFullWidth && isRightCaption,
            'container__contents__caption--half-left':
              !isFullWidth && !isRightCaption,
            'container__contents__caption--row': isRowCaption,
            container__contents__caption: !isRowCaption
          }"
        >
          <p
            :class="{
              'container__contents__caption__title--row': isRowCaption,
              container__contents__caption__title: !isRowCaption
            }"
            v-bind:title="title"
          >
            {{ title }}
          </p>
          <p
            :class="{
              'container__contents__caption__desc--row': isRowCaption,
              container__contents__caption__desc: !isRowCaption
            }"
            v-bind:desc="desc"
          >
            {{ desc }}
          </p>
        </div>
      </div>
    </a>
  </div>
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
      }
    };
  },
  methods: {
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
.container {
  width: 100vw;
  height: 70vw;
  position: relative;

  &__link {
    height: 100%;
  }

  &__cover {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 0;
    z-index: 1;
  }

  &__contents {
    height: 100%;

    &__background {
      height: 100%;
      background-size: cover;
      background-position: center;

      &__filter {
        height: 100%;
        background-color: rgba(0, 0, 0, 0.5);
      }
    }

    &__caption {
      position: absolute;
      top: 0;
      height: 100%;
      display: flex;
      padding: 40px;
      width: 100%;
      align-items: flex-start;
      flex-flow: column;
      justify-content: center;
      $caption = selector();

      &--half-right {
        @extend {$caption};
        width: 50%;
        background-color: rgba(0, 0, 0, 0.5);
        right: 0;
      }

      &--half-left {
        @extend {$caption};
        width: 50%;
        background-color: rgba(0, 0, 0, 0.5);
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
