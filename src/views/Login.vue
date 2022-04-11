<template>
  <div class="page">
    <!-- 顶部可拖拽区域 -->
    <div class="header">
      <div class="icon-item">
        <i class="el-icon-close" @click="changeSize()"></i>
      </div>
    </div>
    <div class="content">
      <!-- 内容左边 -->
      <div class="left">基于FBG数据采集系统后台</div>
      <!-- 内容右侧 -->
      <div class="right">
        <div class="title">连接服务器</div>
        <el-form ref="form" :model="form" label-width="100px" :rules="rules">
          <el-form-item label="服务器" prop="service">
            <el-select v-model="form.service" placeholder="请选择活动区域">
              <el-option label="8.129.190.82" value="ws://8.129.190.82:8083/mqtt"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="主题" prop="topic">
            <el-input v-model="form.topic"></el-input>
          </el-form-item>
          <el-form-item label="用户名" prop="username">
            <el-input v-model="form.username"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="password">
            <el-input type="password" v-model="form.password"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="button" type="primary" @click="onSubmit">立即连接</el-button>
          </el-form-item>
          <!-- <div class="tip">说明：服务器地址为数据来源服务器</div> -->
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
const { ipcRenderer } = require('electron')
import { mapGetters } from 'vuex'
export default {
  name: 'Home',
  data() {
    return {
      form: {
        service: '',
        username: '',
        password: '',
        topic: '',
      },
      rules: {
        service: [{ required: true, message: '请选择连接服务器', trigger: 'change' }],
        username: [{ required: true, message: '请输入连接用户名', trigger: 'blur' }],
        password: [{ required: true, message: '请输入连接密码', trigger: 'blur' }],
        topic: [{ required: true, message: '请输入需要订阅的主题名称', trigger: 'blur' }],
      },
    }
  },
  computed: {
    ...mapGetters({
      connectInfo: 'connect/getConnectInfo',
      connected: 'connect/getConnectStatus',
    }),
  },
  methods: {
    changeSize() {
      ipcRenderer.send('window-max')
    },
    async onSubmit() {
      await this.$store.dispatch('connect/connect', this.form)
       ipcRenderer.send('changWindowSize')
      this.$router.push('/home')
    },
  },
  created() {
    this.form = this.connectInfo
  },
}
</script>
<style lang="scss">
.page {
  height: 100vh;
  -webkit-app-region: no-drag;
  // background: red;
}
.header {
  -webkit-app-region: drag;
  width: 100vw;
  height: 30px;
  display: flex;
  justify-content: flex-end;
}
.content {
  position: relative;
  display: flex;
  align-items: center;
  height: calc(100vh - 30px);
  .left {
    margin-top: -30px;
    height: calc(100% - 20px);
    width: 25%;
    background: url('../assets/images/login_bg.jpeg') no-repeat;
    background-size: cover;
    color: #000;
    font-weight: 600;
    font-size: 32px;
    display: flex;
    justify-content: center;
    // align-items: center;
    padding: 50px 25px 0;
  }
  .right {
    height: 100%;
    display: flex;
    flex-direction: column;
    // align-items: center;
    justify-content: center;
    .title {
      margin-left: 45px;
      font-size: 24px;
      font-weight: 500;
      margin-bottom: 20px;
      // margin-top: -20px;
      // color: #579bfe;
    }
    .tip {
      font-size: 12px;
      text-align: center;
      margin-left: 60px;
      color: #999;
    }
  }
  .el-button {
    // position: absolute !important;
    width: 100%;
  }
}
</style>
