<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios3-2',
  created(){
    /*
      常用配置参数
    */
    // http://localhost:8080/data.json?id=12
    axios.create({
      baseURL:'http://localhost:8080', //请求的域名，基本地址
      timeout: 1000,                   //请求时长，单位（ms)
      url:'/data.json',                //请求路径
      method:'get',                    //请求方法
      headers:{                        //请求头
        token:''                       //当前登陆人信息
      },
      params:{                         //请求参数拼接在url上
        id:12
      },
      data:{                           //请求参数放在请求体里
      }
    })
    /*
      优先级
    */
    // 1.axios全局配置
    axios.defaults.timeout = 1000
    axios.defaults.baseURL = 'http://localhost:8080'
    // 2.axios实例配置
    let instance = axios.create()
    instance.defaults.timeout = 1000
    // 3.axios请求配置
    instance.get('/data.json',{
      timeout:5000
    })
  }
}

</script>
