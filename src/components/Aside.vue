<template>
  <div >
    <h1
      class="mb-2"
      style="text-align: center; background: #545c64; color: white; padding: 20px 0"
    >
     <el-image src="../../2.ico" style="width:30px;height:auto;vertical-align: middle;"/> 博客系统
    </h1>
  </div>
  <el-menu
    active-text-color="#ffd04b"
    background-color="#545c64"
    class="el-menu-vertical-demo"
    text-color="#fff"
    :default-openeds="['/index/article', '3']"
    :collapse-transition="false"
    :collapse="isCollapse"
    router
  >
    <el-menu-item index="/index">
      <el-icon><House /></el-icon>
      <span>首页</span>
    </el-menu-item>

    <el-sub-menu index="/index/article">
      <template #title>
        <el-icon><Message /></el-icon>
        <span>文章管理</span>
      </template>

      <el-menu-item-group>
        <el-menu-item index="/index/article">
          <el-icon><Message /></el-icon>
         <span>写文章</span>
        </el-menu-item>
        <el-menu-item index="/index/article/Classify">
         <el-icon><Message /></el-icon>
        <span>管理分类</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-sub-menu>

    <el-menu-item index="/index/commit">
      <el-icon><Comment /></el-icon>
      <span>评论管理</span>
    </el-menu-item>

    <el-menu-item index="/index/user">
      <el-icon><UserFilled /></el-icon>
      <span>用户管理</span>
    </el-menu-item>
  </el-menu>
</template>

<script>
import { ref } from '@vue/reactivity'
import { onMounted, watch } from '@vue/runtime-core';
export default {
  props:{
    ishows:Boolean
  },
  setup(props){
    let isCollapse=ref(false);
    watch(()=>props.ishows,(n,o)=>{
       props.ishows===false?isCollapse.value=true:isCollapse.value=false
    },{
      deep:true
    })
    return{
      isCollapse
    }
  }

}
</script>
<style lang="less" scoped>
div {
  width: 100%;
  .mb-2 {
    width: 100%;
  }
}
</style>
