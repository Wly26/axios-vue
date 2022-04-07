<template>
  <div>
    <div id="modal">
      <p>modal</p>
    </div>
  </div>
</template>

<script>
// 拦截器：在请求或响应被处理前拦截它们
// 1.请求拦截器 2.响应拦截器
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'axios3-4',
  created(){
    // 1.请求拦截器
    axios.interceptors.request.use(config=>{// 在发送请求前做些什么
      return config
    },err=>{
      // 失败时,
      // 不到后端，返回404
      return Promise.reject(err)
    })
    // 2.响应拦截器
    axios.interceptors.response.use(res=>{
      // 请求成功对响应数据做处理
      return res
    },err=>{
      // 响应错误做什么，
      // 到后端，查无此人，返回500
      return Promise.reject(err)
    })
    // 例子1:
    // 需要登录的接口
    // 登录状态（token:''）
    let instance = axios.create({})
    instance.interceptors.request.use(config=>{
      config.headers.token = ''
      return config
    })
    // 例子2:
    // 不需要登录的接口
    // let newInstance = axios.create({})
    // 例子3:
    // 移动端开发
    let instance_phone = axios.create({})
    // 请求前，展示
    instance_phone.interceptors.request.use(config=>{
      // $('#modal').show()
      $('#modal').hide()
      return config
    })
    // 请求后，隐藏
    instance_phone.interceptors.response.use(config=>{
      $('#modal').hide()
      return config
    })
  }
}


</script>
