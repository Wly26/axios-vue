<template>
  <div>
    <van-contact-list
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      @select="onSelect"
    />
    <van-popup v-model:show="show" position="bottom">
      <van-contact-edit
        is-edit
        :is-edit:isEdit="isEdit"
        :contact-info="editingContact"
        @save="onSave"
        @delete="onDelete"
      />
    </van-popup>
  </div>
</template>

<script>
import axios from 'axios'
import { ContactList, Toast, ContactEdit, Popup} from 'vant';
export default {
  name: 'contactListshizhan',
  components: {
    [ContactList.name]:ContactList,
    [ContactEdit.name]:ContactEdit,
    [Popup.name]:Popup
  },
  data() {
      return {
        list: [],
        instance:null, //axios实例
        show:false, //编辑弹窗是否显示
        editingContact:{}, //正在编辑的联系人数据
        isEdit:false //新建或编辑
      };
    },
  created(){
    this.instance = axios.create({
      baseURL:'http://localhost:9000/api',
      timeout:1000
    })
    this.getList()
  },
  methods: {
    // 获取联系人列表
    getList(){
        this.instance.get('/contactList').then(res=>{
        this.list = res.data.data
      }).catch(err=>{
        console.log(err)
        Toast('请求失败，请稍后重试')
      })
    },
    //新增联系人
    onAdd() {
      this.show = true;
      this.isEdit = false;
    },
    //编辑联系人
    onEdit(info) {
      this.show = true;
      this.isEdit = true;
      this.editingContact = info
    },
    onSelect(info){
      console.log(info)
    },
    //保存联系人
    onSave(info) {
      if(this.isEdit){
        //编辑保存
        this.instance.put('/contact/edit',info).then(res=>{
          if(res.data.code === 200){
            Toast('编辑成功')
            this.show = false
            this.getList()
          }
        }).catch(()=>{
          Toast('编辑失败')
        })
      }else{
        //新建保存
        this.instance.post('/contact/new/json',info).then(res=>{
          if(res.data.code === 200){
            Toast('新建成功')
            this.show = false
            this.getList()
          }
        }).catch(()=>{
          Toast('新建失败')
        })
      }
    },
    //删除联系人
    onDelete(info) {
      this.instance.delete('/contact',{
        params:{
          id:info.id
        }
      }).then(res=>{
        if(res.data.code === 200){
          Toast('删除成功')
          this.show = false
          this.getList()
        }
      }).catch(()=>{
        Toast('删除失败')
      })
    }
  }
}
</script>

<style lang="less" scoped>
.van-contact-list__add{
  z-index: 0;
}
.van-popup{
  height: 100%;
}
</style>
