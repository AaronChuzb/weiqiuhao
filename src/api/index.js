import request from '@/utils/request'
const api = {
  // 获取设备列表
  getDeviceList() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_device_list',
      para: ''
    })
  },
  // 获取传感器列表
  getSensorList() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_sensor_list',
      para: "{\"device_id\":\"45000001\"}"
    })
  },
  // 获取解调设备光谱
  getSensorList() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_spectrum',
      para: "{\"device_id\":\"45000001\"}"
    })
  },

  // 获取解调设备解调波长
  getWaveLength() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_wave_length',
      para: "{\"device_id\":\"45000001\"}"
    })
  },

  // 获取某个设备的温度
  getTemperature() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_temperature',
      para: "{\"device_id\":\"45000001\",\"deviceChannel\": \"1\",\"sensor_id\":\"1\"}"
    })
  },
  // 获取某个设备的应力值
  getTemperature() {
    return request.post('', {
      version: 1,
      rid: 1024,
      type: 'get_strain',
      para: "{\"device_id\":\"45000001\",\"deviceChannel\": \"1\",\"sensor_id\":\"2\"}"
    })
  },

}
export default api