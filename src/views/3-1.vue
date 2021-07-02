<template>
  <div></div>
</template>

<script>
import axios from 'axios'
/*
  创建实例
*/
export default {
  name: 'axios3-1',
  created(){
    // 实例1
    let instance = axios.create({
      baseURL: 'http://localhost:8080', 
      timeout: 1000                     
    })
    // 实例2
    // let instance2 = axios.create({
    //   baseURL: 'http://localhost:9090',  
    //   timeout: 5000                      
    // })
    instance.get('/data.json').then(res=>{
      console.log(res)
    })
  }
}
</script>
