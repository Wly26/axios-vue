<template>
  <div></div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'axios3-3',
  created(){
    // 实际开发
    // 有两种请求接口：
    // http://localhost:8081
    // http://localhost:8082
    let instance1 = axios.create({
      baseURL:'http://localhost:8081',
      timeout:5000
    })
    let instance2 = axios.create({
      baseURL:'http://localhost:8082',
      timeout:5000
    })
    instance1.get('/contactList').then((res)=>{
      console.log(res)
    })
    instance2.get('/contactList',{
      timeout:3000
    }).then((res)=>{
      console.log(res)
    })
  }
}


</script>
