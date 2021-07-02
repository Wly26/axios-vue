<template>
  <div >
  </div>
</template>

<script>

import axios from 'axios'
export default {
  name: 'Axios',
  created(){
    axios.get('/data.json').then((res)=>{
      console.log(res)
    })
  }
}
</script>
