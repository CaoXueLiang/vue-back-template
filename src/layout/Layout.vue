<template>
  <div class="app-wrapper">
    <SideBar class="sidebar-container" />
    <div class="main-container">
      <div class="fixed-header">
        <NavigationBar class="navbar" />
      </div>
      <AppMain />
    </div>
  </div>
</template>

<script>
import SideBar from "./compoments/SideBar";
import AppMain from "./compoments/AppMain";
import NavigationBar from "./compoments/NavigationBar";

export default {
  components: {
    SideBar,
    AppMain,
    NavigationBar,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.app-wrapper {
  position: relative;
  height: 100%;
  width: 100%;
}

.sidebar-container {
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
  width: 210px !important;
  background-color: #304156;
  height: 100%;
  position: fixed;
  font-size: 0px;
  top: 0;
  bottom: 0;
  left: 0;
  z-index: 1001;
  overflow: hidden;
}

.main-container {
  min-height: 100%;
  -webkit-transition: margin-left 0.28s;
  transition: margin-left 0.28s;
  margin-left: 210px;
  position: relative;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - 210px);
  -webkit-transition: width 0.28s;
  transition: width 0.28s;
}

.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  -webkit-box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
