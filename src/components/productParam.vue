<template>
  <div class="nav-bar">
    <div class="defalt" :class="{'scrollFiex':isFixed}">
      <div class="container" >
        <div class="title">
          <a>{{title}}</a>
        </div>
        <div class="params">
          <a href="javascript:;">概述</a>
          <span>|</span>
          <a href="javascript:;">参数</a>
          <span>|</span>
          <a href="javascript:;">用户评价</a>
          <slot name="buy"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "product-param",
  props: {
    title: String
  },
  data() {
    return {
      isFixed: false
    };
  },
  mounted() {
    window.addEventListener("scroll", this.scrollEvent);
  },
  methods: {
    scrollEvent() {
      var topnumber = 0;
      if (window.pageYOffset !== undefined) topnumber = window.pageYOffset;
      else if (document.compatMode === "CSS1Compat")
        topnumber = document.documentElement.scrollTop;
      else topnumber = document.body.scrollTop;
      this.isFixed = topnumber > 200 ? true : false;
    }
  },
  destroyed() {
    window.removeEventListener("scroll", this.scrollEvent, false);
  }
};
</script>

<style lang="scss" scoped>
.defalt{
    border-top: 1px solid #ededed;
    background-color: #fff;
    // box-shadow:0px 0px 1px 10px #888888;
    box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
    &.scrollFiex {
      width: 100%;
      position: fixed;
      top: 0;
      box-shadow: 0px 5px 5px rgba(0, 0, 0, 0.07);
      z-index: 1;
    }
}
.nav-bar {
  z-index: 1;
  .container {

    a {
      line-height: 70px;
    }
    display: flex;
    justify-content: space-between;
    height: 70px;
    .title {
      font-size: 18px;
      font-weight: bold;
      color: #333;
    }
    .params {
      a {
        font-size: 14px;
        color: #666;
      }
      span {
        margin: 0 10px;
      }
    }
  }
}
</style>