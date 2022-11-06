<template>
  <div id="app">
    <div class="layui-container">
      <form class="layui-form layui-form-pane" action="">
        <div class="layui-form-item">
          <label class="layui-form-label">用户名</label>
          <validation-provider  name='邮箱' rules="required|email" v-slot="{errors}">
          <div class="layui-input-inline">

              <input type="text" name="title" required
                     v-model="name"
                     lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">

          </div>
            <div class="error layui-form-mid"> {{errors[0]}}</div>
          </validation-provider>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">密码</label>
          <div class="layui-input-block">
            <input type="password" name="title" required
                   v-model="password"
                   lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
          </div>
        </div>
        <div class="layui-form-item">
          <label class="layui-form-label">验证码</label>
          <div class="layui-input-inline">
            <input type="text" name="title" required
                   v-model="code"
                   lay-verify="required" placeholder="请输入标题" autocomplete="off" class="layui-input">
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
import { ValidationProvider, extend } from 'vee-validate'
// import { required, email } from 'vee-validate/dist/rules'
//
// extend('required', {
//   ...required,
//   message: '请输入{_field_}内容'
// })
// extend('email', email)

import * as rules from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN'
for (const rule in rules) {
  extend(rule, {
    ...rules[rule],
    message: zh.messages[rule]
  })
}

export default {
  name: 'app',
  data () {
    return {
      svg: '',
      name: '',
      password: '',
      code: ''
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
  },
  components: {
    ValidationProvider
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

.error{
  color: red;
}
</style>
