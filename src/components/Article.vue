<template>
  <div class="article">
    <a :href="url" class="article__link">
      <div class="article__flexbox">
        <p class="article__flexbox__date">{{ date }}</p>
        <p class="article__flexbox__title">{{ title }}</p>
      </div>
    </a>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { Consts } from "../components/Constants";

const consts = new Consts();

export default Vue.extend({
  name: "Article",
  props: ["date", "title", "url"]
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.article {
  width: 100%;
//   height: 30px;
  background-color: #000;
  text-align: left;
  margin-bottom: 10px;

  &__link {
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  &__flexbox {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: start;
    align-items: left;

    &:hover {
      font-weight: bold;
    }

    &__date {
      display: inline-block;
      font-size: 15px;
      color: #fff;
      flex: 1;
      margin: auto 0;
    }

    &__title {
      display: inline-block;
      font-size: 15px;
      color: #fff;
      flex: 5;
    }
  }
}
</style>
