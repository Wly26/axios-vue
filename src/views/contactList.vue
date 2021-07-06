<template>
  <div>
    <van-button plain type="primary">朴素按钮</van-button>
  </div>
</template>

<script>
import axios from 'axios'
import { Button } from 'vant';
export default {
  name: 'contactList',
  components: {
    [Button.name]:Button
  },
  created(){
    axios.get('/data.json').then((res)=>{
      console.log(res)
    })
  }
}
</script>
