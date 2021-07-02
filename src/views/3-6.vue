<template>
  <div></div>
</template>

<script>
//取消正在进行的http请求（了解）
import axios from 'axios'

export default {
  name: 'axios3-6',
  created(){
    let source = axios.CancelToken.source()
    axios.get('/data.json',{
      CancelToken:source.token
    }).then(res=>{
      console.log(res)
    }).catch(err=>{
      console.log(err)
    })
    // 取消请求（message可选）
    source.cancel('cancel http')
  }
}

</script>
