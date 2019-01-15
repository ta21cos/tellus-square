<template>
  <div class="contact">
    <p class="contact__title">Contact List</p>
    <div class="contact__fbox">
      <a class="contact__fbox__item" href="https://twitter.com/tellusium"
        ><i class="fab fa-twitter contact__fbox__item__icon"></i
      ></a>
      <a class="contact__fbox__item" href="https://github.com/ta21cos"
        ><i class="fab fa-github-alt contact__fbox__item__icon"></i
      ></a>
      <a class="contact__fbox__item" href="https://tellusium.hatenablog.com/"
        ><i class="fas fa-blog contact__fbox__item__icon"></i
      ></a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Contact"
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
.contact {
  width: 100vw;
  background-color: #fff;
  padding: 40px;
  position: relative;

  &__title {
    width: 100%;
    text-align: center;
    font-size: 20px;
    color: #000;
    margin-bottom: 40px;
    font-weight: bold;
  }

  &__fbox {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    &__item {
      height: 60px;
      width: 60px;
      border-radius: 50%;
      background-color: #000;
      font-size: 30px;
      color: #fff;
      margin: 0 20px;

      &__icon {
        margin-top: 15px;
      }

      &:hover {
        transform: scale(1.2, 1.2);
      }
    }
  }
}
</style>
