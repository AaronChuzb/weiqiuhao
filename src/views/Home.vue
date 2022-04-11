<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="title">
         <el-avatar shape="square" size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
         <div>管理员</div>
      </div>
      <el-menu :default-openeds="['1', '3']">
        <el-menu-item index="1">
          <i class="el-icon-menu"></i>
          <span slot="title">设备列表</span>
        </el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        
      </el-header>

      <el-main>
        <el-table :data="tableData">
          <el-table-column prop="date" label="日期" width="140"> </el-table-column>
          <el-table-column prop="name" label="姓名" width="120"> </el-table-column>
          <el-table-column prop="address" label="地址"> </el-table-column>
        </el-table>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }
    return {
      tableData: Array(20).fill(item),
    }
  },
  created(){
    console.log(this.$api.getWaveLength())
  }
}
</script>
<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  -webkit-app-region: drag;
}

.el-aside {
  color: #333;
}
.title{
  padding: 10px 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */
  
}
.el-avatar{
  margin-right: 15px;
  margin-left: 15px;
}
</style>


