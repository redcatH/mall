<template>
  <transition name="slide-fade">
    <div class="modal" v-show="showModal">
      <div class="mask"></div>
      <div class="modal-dialog">
        <div class="modal-header">
          <span class="Title">{{title}}</span>
          <a href="javascript:;" class="icon-close" @click="$emit('close')"></a>
        </div>
        <div class="modal-body">
          <slot name="body"></slot>
        </div>
        <div class="modal-footer">
          <div class="btn" v-if="buttonType==1" @click="$emit('submit')">{{sureText}}</div>
          <div class="btn" v-if="buttonType==2" @click="$emit('cancel')">{{cancelText}}</div>
          <div class="btn-group" v-if="buttonType==3">
            <div class="btn" @click="$emit('submit')">{{sureText}}</div>
            <div class="btn btn-default" @click="$emit('cancel')">{{cancelText}}</div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "modal",
  props: {
    //modal类型:小small、中middle、大big、表单from
    modalType: {
      type: String,
      default: "from"
    },
    showModal: Boolean,
    title: String,
    buttonType: {
      //1确定 2取消 3确认取消
      type: String,
      default: "1"
    },
    sureText: {
      type: String,
      dafault: "确认"
    },
    cancelText: {
      type: String,
      dafault: "取消"
    }
  },

  methods: {}
};
</script>


<style lang="scss">
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/modal.scss";
@import "./../assets/scss/button.scss";
</style>  