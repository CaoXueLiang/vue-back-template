<template>
  <div class="logincontain">
    <div class="width_200">
      <el-input
        placeholder="请输入账号"
        prefix-icon="el-icon-user-solid"
        v-model="account"
      >
      </el-input>
      <el-input
        show-password
        class="marginTop20"
        placeholder="请输入密码"
        prefix-icon="el-icon-s-tools"
        v-model="password"
      >
      </el-input>
      <el-button @click="loginIn" class="marginTop20 buttonStyle" type="primary"
        >登 录</el-button
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "admin",
      password: "123456",
    };
  },
  methods: {
    loginIn() {
      if (this.account == "admin" && this.password == "123456") {
        this.$router.push("/home");
      } else {
        this.$message.error("账号或密码错误");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.logincontain {
  height: 100vh;
  background-color: #2d3a4b;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.width_200 {
  width: 400px;
}

.marginTop20 {
  margin-top: 20px;
}
.buttonStyle {
  width: 100%;
}
</style>
