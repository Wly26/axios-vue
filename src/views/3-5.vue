<template>
  <div></div>
</template>

<script>
// 错误处理：请求错误时进行的处理
import axios from 'axios'
import $ from 'jquery'

export default {
  name: 'axios3-5',
  created(){
    // 1.请求拦截器
    axios.interceptors.request.use(config=>{
      // 在发送请求前做些什么
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

    axios.get('/post').then(res=>{
      console.log(res)
    }).catch(err=>{
      // 请求错误时,都会进入这个函数
      console.log(err)
    })

    // 例子：添加统一的错误处理
    let instance = axios.create({})
    instance.interceptors.request(config=>{
      return config
    },err=>{
      // 请求错误 401超时，404 not found
      return Promise.reject(err)
    })
    instance.interceptors.response.use(res=>{
      return res
    },err=>{
      // 响应错误处理 500系统错误，502系统重启
      $('#modal').show()
      setTimeout(()=>{
        $('#modal').hide()
      },2000)
      return Promise.reject(err)
    })
    instance.get('/data.json').then(res=>{
      console.log(res)
    })
  }
}


</script>
