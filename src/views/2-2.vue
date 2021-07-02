<template>
  <div></div>
</template>

<script>
import axios from 'axios'
/*
  用哪种方法，是由后端定义的
  get,post,put,patch,delete。
  get: 获取数据
  post: 提交数据（表单提交+文件上传）
  put: 更新数据（所有数据推送到后端）
  patch: 更新数据（只将修改的数据推送到后端）
  delete: 删除数据
*/
export default {
  name: 'axios2-2',
  created(){
    // get
    // http://localhost:8080/data.json?id=12
    // 方式一
    axios.get('/data.json',{
      params:{
        id:12
      }
    }).then((res)=>{
      console.log(res)
    })
    // 方式二
    axios({
      method:'get',
      url:'/data.json',
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res)
    })

    // post
    // data数据格式：
    // 1.applicition/json(传入json数据)
    let data = {
      id:12
    }
    // 路径，data数据格式
    // 方式一：
    axios.post('/post',data).then(res=>{
      console.log(res)
    })
    // 方式二：
    axios({
      method:'post',
      url:'/post',
      data:data
    }).then(res=>{
      console.log(res)
    })

    // 2.form-data 表单提交（图片上传，文件上传）
    let formData = new FormData()
    for(let key in data){
      formData.append(key,data[key])
    }
    axios.post('/post',formData).then(res=>{
      console.log(res)
    })
    // put请求
    axios.put('/put',data).then(res=>{
      console.log(res)
    })
    // patch请求
    axios.patch('/patch',data).then(res=>{
      console.log(res)
    })
    // delete请求
    // 方式一（1）：
    axios.delete('/delete',{
      // 这里的参数，直接放在了url上，为
      // http://localhost:8080/delete?id=12
      params:{
        id:12
      }
    }).then(res=>{
      console.log(res)
    })
    // 方式一（2）：
    axios.delete('/delete',{
      data:{
        id:12
      }
    }).then(res=>{
      console.log(res)
    })
    // 方式二
    axios({
      method:'delete',
      url:'/delete',
      data:{}
    }).then(res=>{
      console.log(res)
    })
  }
}
</script>
