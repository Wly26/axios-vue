<template>
  <div>
    <van-button plain type="primary">朴素按钮</van-button>
    <van-contact-edit
      is-edit
      show-set-default
      :contact-info="editingContact"
      set-default-label="设为默认联系人"
      @save="onSave"
      @delete="onDelete"
    />
  </div>
</template>

<script>
import { Button, Toast, ContactEdit } from 'vant';
export default {
  name: 'contactList',
  components: {
    [Button.name]:Button,
    [ContactEdit.name]:ContactEdit
  },
  data() {
    return {
      editingContact: {},
    };
  },
  methods: {
    onSave() {
      Toast('保存');
    },
    onDelete() {
      Toast('删除');
    },
  }
}
</script>
