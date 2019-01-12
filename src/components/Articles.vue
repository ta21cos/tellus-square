<template>
  <div class="frame">
    <p class="title">Tech Articles</p>
    <div class="articles-container">
      <Article
        class="article"
        v-for="(article, index) in articles"
        :key="index"
        :date="article.date"
        :title="article.title"
        :url="article.url"
      ></Article>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Article from "../components/Article.vue";
import { Consts } from "../components/Constants";

const consts = new Consts();

export default Vue.extend({
  name: "Articles",
  props: ["articles"],
  components: {
    Article
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.frame {
  width: 100vw;
  background-color: #000;
  padding: 40px;
}

.title {
  width: 100%;
  text-align: center;
  font-size: 20px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
}

.articles-container {
  width: 600px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: left;
  flex-flow: column;
}
</style>
