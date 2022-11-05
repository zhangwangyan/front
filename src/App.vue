<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <div class="layui-input-block">
            <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required  lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
          <div class="layui-form-mid  svg" v-html="svg" @click="getCaptcha"></div>
        </div>

      </form>

      <button type="button" class="layui-btn">点击登录</button>
      <a class="desperado-link" href="" >找回密码</a>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      svg: ''
    }
  },
  mounted () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      axios.get('http://localhost:3000/demo').then((res) => {
        console.log(res)
        this.svg = res.data.msg
      })
    }
  }
}
</script>
<style lang="scss" scoped>
#app{
  background: #f2f2f2;
}
.layui-container{
  background: #fff;
}
input{
  width: 190px;
}
.desperado-link{
  margin-left: 10px;
  &:hover{
    color: #42b983;
  }
}
.svg{
  position:relative;
  top:-13px;
}
</style>
