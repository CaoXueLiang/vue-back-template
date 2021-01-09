<template>
  <section class="app-main ">
    <transition name="fade-transform" mode="out-in">
      <!-- <router-view :key="key" /> -->
      <div>
        我是主要的内容
      </div>
    </transition>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
.app-main {
  min-height: calc(100vh - 50px);
  width: 100%;
  position: relative;
  overflow: hidden;
  background-color: blanchedalmond;
  padding-top: 50px;
}
</style>
