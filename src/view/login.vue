<template>
  <div class="bg">
    <el-card class="box-card">
      <el-form :model="form" label-width="50px" class="form">
        <h1>登录</h1>
        <el-form-item label="账号" class="button" >
          <el-input v-model="form.account" clearable key=""/>
        </el-form-item>
        <el-form-item label="密码" class="button">
          <el-input v-model="form.password" type="password" clearable show-password    maxlength="10"/>
        </el-form-item>
        <el-form-item class="button1">
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="success" @click="registered">注册</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
import { reactive } from "@vue/reactivity";
import {logins} from '../axios/api'
import router from '@/router/router';
import { onMounted } from '@vue/runtime-core';
export default {
  setup() {
    const form = reactive({
      account: "123",
      password: "123",
    });
     const login = async () => {
      if(form.account!==''&&form.password!==''){
        router.push('/index')
        //  const res= await logins(form);
        //  res.data.code===200?router.push("index"):alert(res.data.msg);
      }else{
        alert("账号密码不能为空")
      }  
     
    };
    const registered=()=>{

    }
    return {
      form,
      login,
      registered,
    };
  },
};
</script>

<style lang="less" scoped>
.bg {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgb(61, 102, 234), rgb(242, 30, 30), rgb(228, 140, 16));
  display: flex;
  justify-content: center;
  align-items: center;

  .box-card {
    width: 400px;
    height: 390px;
    border-radius: 20px;
    position: relative;
    .form {
      h1 {
        text-align: center;
      }
      width: 300px;
      height: 300px;
      position: absolute;
      top: 55%;
      left: 50%;
      transform: translate(-50%, -45%);
      .button {
        padding-top: 20px;
      }
      .button1 {
        padding: 20px 25px;
      }
    }
  }
}
</style>
