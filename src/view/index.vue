<template>
  <div class="common-layout">
    <el-container>
      <el-aside :width="widths">
        <Aside :ishows="show"></Aside>
      </el-aside>
      <el-container>
        <el-header>
          <Header :ishsow="show" @event="ISclick" />
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import { nextTick, ref, watch } from "vue";
import Aside from "../components/Aside.vue";
import Header from "../components/Header.vue";
export default {
  setup() {
    let show = ref(true);
    const widths = ref("150px");
    function ISclick(data) {
        show.value=data
        data === false ? (widths.value = "50px") : (widths.value = "150px");
    }
    return {
      show,
      ISclick,
      widths,
    };
  },
  components: {
    Aside,
    Header,
  },
};
</script>
<style lang="less">
.common-layout {
  width: 100vw;
  height: 100vh;
  .el-aside {
    height: 100vh;
    background: #545c64;
  }
  .el-header {
    height: 10%;
    border: 1px solid black;
  }
  .el-main {
    border: 1px solid rgb(24, 199, 18);
  }
}
</style>
