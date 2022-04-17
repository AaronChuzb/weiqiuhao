<template>
  <el-container style="height: 100vh; border: 1px solid #eee">
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <div class="title">
        <el-avatar shape="square" size="large" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"></el-avatar>
        <div>管理员</div>
      </div>
      <div class="list">
        <el-card class="box-card" v-for="(item, index) in deviceList" :key="index">
          <div slot="header" class="clearfix">
            <span>{{item.deviceName}}</span>
            <el-button style="float: right; padding: 3px 0" type="text">选择设备</el-button>
          </div>
          <div v-for="o in 4" :key="o" class="text item">
            {{ '列表内容 ' + o }}
          </div>
        </el-card>
      </div>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px"> </el-header>

      <el-main>
        <div class="chart"></div>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import * as echarts from 'echarts'
export default {
  data() {
    const item = {
      date: '2016-05-02',
      name: '王小虎',
      address: '上海市普陀区金沙江路 1518 弄',
    }
    return {
      deviceList: [],
      tableData: Array(20).fill(item),
    }
  },
  created() {
    this.getDeviceList()
  },
  methods:{
    async getDeviceList(){
      const res = await this.$api.getDeviceList()
      this.deviceList = res.result
    }
  }
}
</script>
<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
  -webkit-app-region: drag;
}

.el-aside {
  color: #333;
}
.title {
  padding: 10px 0;
  display: flex;
  align-items: center;
  /* justify-content: center; */
}
.el-avatar {
  margin-right: 15px;
  margin-left: 15px;
}
.box-card{
  margin: 10px auto;
}

</style>
