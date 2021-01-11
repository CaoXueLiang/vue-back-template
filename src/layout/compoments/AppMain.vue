<template>
  <div class="app-main ">
    <transition name="fade-transform" mode="out-in">
      <!-- <router-view :key="key" /> -->
      <div>
        <!-- 我是主要的内容 -->
      </div>
    </transition>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import "../../styles/layoutconst.scss";

.app-main {
  min-height: calc(100vh - #{$layoutHeaderHeight});
  width: 100%;
  top: $layoutHeaderHeight;
  position: relative;
  overflow: hidden;
  background-color: #f8f8f8;
}
</style>
