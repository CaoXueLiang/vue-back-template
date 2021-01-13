<template>
  <div class="app-main ">
    <transition name="fade-transform" mode="out-in">
      <div>
        <router-view :key="key" />
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  computed: {
    key() {
      return this.$route.fullPath;
    },
  },
};
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
