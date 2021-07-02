<template>
  <div></div>
</template>

<script>
import axios from 'axios'
/*
  并发请求，并同时处理返回值
*/
export default {
  name: 'axios2-3',
  created(){
    // axios.all() axios.spread()
    axios.all(
      [
        axios.get('/data.json'),
        axios.get('/city.json')
      ]
    ).then(
      axios.spread((dataRes,cityRes)=>{
        console.log(dataRes,cityRes)
      })
    )
  }
}
</script>
