
<template>
  <div class="login">
    <div class="header">
      <div class="logo">
        <img src="@/assets/images/logo.png">
      </div>
    </div>
    <div class="login-wrapper">
      <div class="form-left">
        <img src="@/assets/images/plane.png" alt>
        <span class="text">向未来前进·让改变发声</span>
      </div>
      <el-form ref="form" :model="userInfo" @keyup.enter.native="beforeSubmit" label-width="0px" class="login-form" :rules="rules" @submit.native.prevent>
        <el-tabs v-model="activeName" type="card">
          <el-tab-pane label="登录" name="first">
            <div class="title">珠宝云登录</div>
          </el-tab-pane>
          <el-tab-pane label="注册" name="second">
            <div class="title">珠宝云注册</div>
          </el-tab-pane>
        </el-tabs>
        <template>
          <el-form-item prop="username">
            <input type="text" style="width: 0; height:0; display:none;" disabled>
            <el-input v-model="userInfo.username" autocomplete="new-password" :maxlength="50" placeholder="请输入账户名"></el-input>
            <i class="icon-user"></i>
          </el-form-item>
          <el-form-item prop="password">
            <input type="password" style="width: 0; height:0; display:none;" disabled>
            <el-input v-model="userInfo.password" autocomplete="new-password" type="password" :maxlength="50" placeholder="请输入密码"></el-input>
            <i class="icon-password"></i>
          </el-form-item>
          <div class="form-item" style="padding-top: 10px;">
            <el-button type="primary" class="btn-login" @click="login" v-if="activeName == 'first'">登 录</el-button>
            <el-button type="primary" class="btn-login" @click="registered" v-else>注 册</el-button>
          </div>
        </template>
      </el-form>
    </div>
  </div>
</template>
<script>
import { pulickKey } from '@/configs/publickKey'
import { JSEncrypt } from 'jsencrypt'
import cookies from 'js-cookie'
import {
  USERS_API_REGISTERED,
  USERS_API_LOGIN
} from '@/apis/user.js'
export default {
  data () {
    return {
      activeName: 'first',
      userInfo: {
        password: '',
        username: ''
      },
      rules: {
        companycode: {
          validator(rule, value, callback) {
            if (!value) {
              return callback(new Error('请输入公司代码'))
            }
            return callback()
          },
          trigger: 'change'
        },
        username: {
          required: true,
          message: '请输入账户名',
          trigger: 'blur'
        },
        password: {
          required: true,
          message: '请输入密码',
          trigger: 'blur'
        }
      }
    }
  },
  methods: {
    login() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          const { username, password } = this.userInfo
          const encryptor = new JSEncrypt() // 新建JSEncrypt对象
          encryptor.setPublicKey(pulickKey) // 设置公钥
          USERS_API_LOGIN({ name: username, password: encryptor.encrypt(password) }).then(res => {
            if (res.data.Code == 'CORRECT') {
              cookies.set('access-token', res.data.Data.token)
              this.$message({
                type: 'success',
                message: '登录成功'
              })
              this.$store.commit('userName', res.data.Data.Name)
              this.$router.push('/home')
            }
          })
        }
      })
    },
    registered() {
      this.$refs['form'].validate(valid => {
        if (valid) {
          const encryptor = new JSEncrypt() // 新建JSEncrypt对象
          encryptor.setPublicKey(pulickKey) // 设置公钥
          USERS_API_REGISTERED({
            name: this.userInfo.username,
            password: encryptor.encrypt(this.userInfo.password)
          }).then(res => {
            if (res.data.Code == 'CORRECT') {
              cookies.set('access-token', res.data.Data.token)
              this.$message({
                type: 'success',
                message: '注册成功'
              })
              this.$store.commit('userName', res.data.Data.Name)
              this.$router.push('/home')
            }
          })
        }
      })
    }
  },
  mounted () {
  },
  watch: {},
  components: {}
}
</script>
<style lang="scss" scoped>
.login {
  height: 100%;
  background: url(../../assets/images/background.jpg) center no-repeat;
  overflow: hidden;
  .header {
    background-color: #1e2f45;
    height: 60px;
    border-bottom: solid 1px #283b53;
    .logo {
      display: flex;
      margin: 0 auto;
      padding: 11px 10px;
      width: 70%;
      max-width: 1200px;
    }
  }
}
.wrapper {
  width: 100%;
  height: 100%;
  .header {
    margin: 0 auto;
    width: 70%;
    max-width: 1200px;
    height: 60px;
    background-color: #006db8;
  }
}
.login-wrapper {
  position: absolute;
  display: flex;
  justify-content: space-between;
  width: 70%;
  top: 38%;
  left: 50%;
  transform: translate(-50%, -50%) scale(1);
  transition: all 0.2s;
  text-align: center;
  .form-left {
    display: flex;
    flex: 1;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    img {
      margin-top: 40px;
      max-height: 164px;
    }
    .text {
      font-size: 16px;
      margin-top: 40px;
      word-spacing: 20px;
      letter-spacing: 21px;
      color: #fff;
    }
  }
}
.login-form {
  position: relative;
  padding: 26px 50px 40px;
  width: 280px;
  background: #fff;
  border-radius: 2px;
  .title {
    font-size: 18px;
    color: #333;
    padding-bottom: 26px;
  }
  /deep/ .el-form-item {
    position: relative;
    margin-bottom: 20px;
    text-align: left;
    /deep/ &.is-success .el-input__inner {
      border: solid 0.5px #e5e5e5;
    }
    /deep/ &.is-error .el-input__inner {
      border: solid 0.5px #e5e5e5;
    }
    /deep/ .el-form-item__content {
      /deep/ .el-input {
        input {
          padding-left: 12px;
          width: 100%;
          height: 38px;
          font-size: 14px;
          color: #333;
          background: #f5f5f5;
          border-radius: 2px;
          :active {
            border-color: #84c0ea !important;
          }
        }
      }
      & > i {
        position: absolute;
        top: 50%;
        right: 10px;
        transform: translateY(-50%);
        font-size: 16px;
      }
      & > .help {
        position: absolute;
        top: 100%;
        right: 0;
        height: 20px;
        line-height: 20px;
        font-size: 12px;
      }
    }
  }
  .btn-login {
    width: 100%;
    height: 40px;
    font-size: 14px;
    color: #fff;
    background: #006db8;
    border: 0;
    border-radius: 2px;
    outline: 0;
    cursor: pointer;
    &:hover {
      background: #007ed5;
    }
    &:active {
      background: #004777;
    }
  }
  .auth-code {
    display: block;
    width: 100%;
    height: 50px;
    // border: solid 1px #e5e5e5;
    border-radius: 2px;
  }
}
/* @module 媒体查询 */
@media screen and (min-width: 1921px) {
  .container {
    background-size: 100% 100%;
  }
}
@media screen and (max-width: 1360px) {
  .form-left {
    transform: scale(0.8);
  }
}

@media screen and (max-width: 1440px) {
  .login-wrapper {
    transform: scale(0.9) translate(-50%, -50%);
  }
  .error-box {
    transform: scale(0.9) translate(-50%, 0);
  }
}
@media screen and (max-width: 1280px) {
  .login-wrapper .form-left img {
    width: 85%;
  }
  .login-form {
    width: 240px;
  }
}
@media screen and (max-width: 1110px) {
  .login-wrapper .form-left .text {
    letter-spacing: 15px;
  }
}
@media screen and (max-width: 1000px) {
  .login-wrapper .form-left img {
    width: 100%;
  }
  .login-form {
    width: 220px;
  }
}
</style>