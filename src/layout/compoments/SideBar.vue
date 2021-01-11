<template>
  <div class="contain">
    <el-scrollbar class="scrollbar-wrapper">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="#ffffff"
        active-text-color="#409eff"
        :collapse="false"
      >
        <sidebar-item
          v-for="menuItem in menuList"
          :key="menuItem.menuId"
          :item="menuItem"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import SidebarItem from "./SideBarItem";
import menuArray from "@/permission";
export default {
  components: {
    SidebarItem,
  },
  data() {
    return {
      menuList: menuArray,
    };
  },
  mounted() {
    console.log("======" + JSON.stringify(this.menuList));
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/layoutconst.scss";
.contain {
  background-color: #304156;
}

::v-deep .el-menu {
  width: $layoutSideBarWidth;
  border: none;
}

::-webkit-scrollbar-track-piece {
  background: #d3dce6;
}

::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-thumb {
  background: #99a9bf;
  border-radius: 20px;
}

.scrollbar-wrapper {
  overflow-x: hidden !important;
}

::v-deep .el-scrollbar__bar.is-vertical {
  right: 0px;
}

::v-deep .el-scrollbar {
  height: 100%;
}

::v-deep .el-menu-item {
  text-align: left;
}

::v-deep .el-submenu__title {
  height: 50px;
  line-height: 50px;
  background: #f7fafe;
  color: #333333;
  font-size: 14px;
  text-align: left;

  .iconfont {
    margin-right: 10px;
    color: #a3a3a3;
  }
}
</style>
