<template>
  <div>
    <template v-if="!item.childrens || !item.childrens.length">
      <a @click="handleClickItem(item.path)">
        <el-menu-item :index="item.menuId">
          <span v-if="item.iconfont" :class="['iconfont', item.iconfont]" />
          <span slot="title" :title="item.lang">{{ item.lang }}</span>
        </el-menu-item>
      </a>
    </template>
    <el-submenu v-else :index="item.menuId">
      <template slot="title">
        <span v-if="item.iconfont" :class="['iconfont', item.iconfont]" />
        <span slot="title" :title="item.lang">{{ item.lang }}</span>
      </template>
      <template v-for="child in item.childrens">
        <sidebar-item :key="child.menuId" :item="child" />
      </template>
    </el-submenu>
  </div>
</template>

<script>
import { isExternal } from "../../utils/validate.js";
export default {
  name: "SidebarItem",
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    handleClickItem(path) {
      console.log("====path====" + path);
      console.log("====path====" + this.$route.fullPath);
      if (!isExternal(path)) {
        this.$router.push(path);
      } else {
        window.open(path, "_blank");
      }
    },
  },
};
</script>

<style lang="scss" scoped></style>
