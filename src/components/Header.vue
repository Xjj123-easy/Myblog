<template>
  <div class="header">
    <div class="headerleft">
      <div @click="isClick" class="icon">
        <span>
          <el-icon v-if="ishow"><Expand /></el-icon>
          <el-icon v-else><Fold /></el-icon>
        </span>
      </div>

      <div class="breadlist">
        <el-breadcrumb separator="/" >
          <el-breadcrumb-item v-for="(k, i) in breadlist.item" :key="i">
            <a :href="k.path" >{{ k.meta.title }}</a>
          </el-breadcrumb-item>
        </el-breadcrumb>
      </div>
    </div>

    <div class="headerright">
      <el-dropdown @command="handleCommand">
        <el-avatar
          src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
        />
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item command="inform">个人资料</el-dropdown-item>
            <el-dropdown-item command="logout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { reactive, ref } from "@vue/reactivity";
import { nextTick, onMounted, watch, defineEmits } from "@vue/runtime-core";
import { useRouter } from "vue-router";
import router from '../router/router';
export default {
  props: {
    ishsow: Boolean,
  },
  emits: ["event"],
  setup(props, ctx) {
    let breadlist = ref({
      item: [],
    });
    let ishow = ref(props.ishsow);
    function isClick() {
      if (ishow.value === true) {
        ishow.value = false;
      } else {
        ishow.value = true;
      }
      ctx.emit("event", ishow.value);
    }
    onMounted(() => {
       changebreak(router)
    });
    watch(()=>{
      return router.currentRoute.value.path
    },
    ()=>{
       changebreak(router)
    },{
      deep:true
    })
   function handleCommand(e){
     switch(e){
      case "logout":router.push('/login');;break;
      default:alert("erro");break;
     }
   }
   function changebreak(e){
      let routers = e.currentRoute.value.matched;
      breadlist.value.item = routers;
   }
    return {
      breadlist,
      ishow,
      isClick,
      handleCommand
    };
  },
};
</script>
<style lang="less" scoped>
.header {
  height: 100%;
  width: 100%;
  display: flex;
  .headerleft {
    flex: 1;
    height: auto;
    justify-content: flex-start;
    align-items: center;
    display: flex;
    font-size: 25px;
  }
  .headerright {
    width: auto;
    height: 100%;
    display: flex;
    align-items: center;
  }
}
</style>
