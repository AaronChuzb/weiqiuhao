import mqtt from 'mqtt'
import Router from 'vue-router'
var client
const options = {
  connectTimeout: 40000,
  clientId: 'mqtitId-Home',
  username: '',
  password: '',
  clean: true
}
// 连接信息
const state = {
  connected: false,
  service: 'ws://8.129.190.82:20886/mqtt', // 默认服务器
  username: 'dashuju', // 默认用户名
  password: '12345678', // 默认密码
  topic: '/receive_topic', // 主题
  receive: '' // 接收的消息
}
const getters = {
  getConnectInfo(state){
    return {
      service: state.service,
      username: state.username,
      password: state.password,
      topic: state.topic
    }
  },
  getConnectStatus(state){
    return state.connected
  }
}
const mutations = {
  SET_CONNECTED(state, status){
    state.connected = status
  },
  SET_RECEIVE(state, receive){
    state.receive = receive
  }
}
const actions = {
  // 连接action
  connect({commit}, setting){
    // 连接前先断开
    if(client){
      client.close()
    }
    client = mqtt.connect(setting.service, {
      connectTimeout: 40000,
      clientId: 'dvaofsubd_send1',
      username: setting.username,
      password: setting.password,
      clean: true
    })
    client.on('connect', (e) => {
      console.log('连接成功:')
      // 订阅的是服务端的/receive_topic，代表硬件上传的主题，下发需要另外一个主题
      client.subscribe(setting.topic, { qos: 2 }, (error) => {
        console.log(error)
        if (!error) {
          // 订阅成功
          commit('SET_CONNECTED', true)
          // console.log('订阅成功')
          // Router.push('/home')
        } else {
          // 订阅失败
          commit('SET_CONNECTED', false)
          console.log('订阅失败')
        }
      })
    })
    // 接收消息处理
    client.on('message', (topic, message) => {
      console.log('收到来自', topic, '的消息', message.toString())
      commit('SET_RECEIVE', message.toString())
    })
    // 断开发起重连
    client.on('reconnect', (error) => {
      console.log('正在重连:', error)
    })
    // 链接异常处理
    client.on('error', (error) => {
      console.log('连接失败:', error)
    })
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}