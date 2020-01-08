<template>
  <div class="full-wrapper">
    <div class="nofound-box">
      <img src="@/assets/images/404.png" />
      <p>抱歉！您所访问的页面不存在，请重新加载</p>
      <div class="link-bar">
        <router-link
          to="/home"
          replace
          class="btn-error"
        >
          <span>返回首页</span>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  methods: {
    reflesh() {
      location.reload()
    }
  }
}
</script>

<style lang="scss" scoped>
.full-wrapper {
  width: 100%;
  height: 100%;
  .nofound-box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    img {
      display: block;
    }
    p {
      margin: 30px 0;
      font-size: 18px;
      color: #888;
    }
    .link-bar {
      font-size: 0;
      .btn-error {
        display: inline-block;
        margin: 0 20px;
        width: 100px;
        height: 34px;
        font-size: 14px;
        color: #399fe5;
        line-height: 32px;
        text-align: center;
        border: solid 1px #e5e5e5;
        cursor: pointer;
        i {
          margin-right: 7px;
          vertical-align: middle;
          font-size: 16px;
        }
        span {
          vertical-align: middle;
        }
        &:hover {
          border-color: #399fe5;
        }
      }
    }
  }
}
</style>
