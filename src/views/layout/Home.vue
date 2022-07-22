<template>
  <div class="home">
    <left-menu />
    <div :class="{ 'main-app': true, 'menu-unfold': $store.state.collapsed }">
      <slide-nav />
      <router-view></router-view>
    </div>
  </div>
</template>
<style lang="less">
@import url("~@/assets/css/home.less");
</style>
<script>
import LeftMenu from './components/menu.vue';
import SlideNav from './components/sliderNav.vue';

export default {
  data() {
    return {};
  },
  components: {
    LeftMenu,
    SlideNav,
  },
};
</script>
