<template>
  <div class="contain">
    <div></div>
    <el-dropdown>
      <div class="display_center_row">
        <img class="avatarImage" src="../../assets/avator.png" />
        <i class="el-icon-arrow-down el-icon--right"></i>
      </div>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item @click.native="gotoHome">home</el-dropdown-item>
        <el-dropdown-item divided @click.native="loginOut"
          >login out</el-dropdown-item
        >
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    gotoHome() {
      this.$router.push("/");
    },
    loginOut() {
      this.$router.push("/about");
    },
  },
};
</script>

<style scoped>
.contain {
  padding-left: 20px;
  padding-right: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.display_center_row {
  display: flex;
  align-items: center;
}

.avatarImage {
  width: 30px;
  height: 30px;
  border-radius: 15px;
  cursor: pointer;
}
</style>
