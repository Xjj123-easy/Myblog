<template>
  <div class="wirte">
    <div class="header">
      <el-button @click="add">添加文章</el-button>
      <el-button>删除文章</el-button>
    </div>
    <div class="tabel">
      <el-table ref="multipleTableRef" :data="tableData" style="width: 100%" order>
        <el-table-column type="selection" width="55" />
        <el-table-column label="Date" width="120">
          <template #default="scope">{{ scope.row.date }}</template>
        </el-table-column>
        <el-table-column property="name" label="Name" width="120" />
        <el-table-column property="address" label="Address" show-overflow-tooltip />
        <el-table-column fixed="right" label="Operations" width="120">
          <template #default>
            <el-button link type="primary" size="small"
              >Detail</el-button
            >
            <el-button link type="primary" size="small">Edit</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>

    <div class="dialog">
      <el-dialog v-model="dialogVisible" title="添加" width="40%" draggable>
        <el-form>
          <el-form-item label="请输入文章">
            <el-input />
          </el-form-item>
        </el-form>
        <template #footer>
          <span class="dialog-footer">
            <el-button @click="dialogVisible = false">取消</el-button>
            <el-button type="primary" @click="dialogVisible = false">确定</el-button>
          </span>
        </template>
      </el-dialog>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from "@vue/reactivity";
export default {
  setup() {
    let dialogVisible = ref(false);
    const tableData = reactive([
      {
        date: "2016-05-03",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-02",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-04",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
      {
        date: "2016-05-01",
        name: "Tom",
        address: "No. 189, Grove St, Los Angeles",
      },
    ]);
    function add() {
      dialogVisible.value = true;
    }
    return {
      tableData,
      dialogVisible,
      add,
    };
  },
};
</script>
<style lang="less" scoped>
.wirte {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
  .header {
    width: 100%;
    height: 10%;
  }
  .tabel {
    width: 100%;
    height: auto;
  }
}
</style>
