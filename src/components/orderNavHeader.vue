<template>
  <div class="ordernavheader_box">
    <div class="container clearfix">
      <div class="header-logo">
        <a></a>
      </div>
      <div class="thispageTitle">
        我的购物车
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </div>
      <div class="username">redcat</div>
    </div>
  </div>
</template>
<script>
export default {
  name: "orderNavheader"
};
</script>


<style lang="scss" scoped>

.header-logo {
  float: left;
  margin-top: 10px;
}
.thispageTitle {
  float: left;
  margin-left: 50px;
  font-size: 28px;
  span {
    margin-left: 10px;
    font-size: 14px;
    color: #b0b0b0;
  }
}
.username {
  float: right;
  font-size: 14px;
  color: #b0b0b0;
}

.ordernavheader_box {
  border-bottom: 1px solid #FF6600;
  .container {
    height: 79px;
    line-height: 79px;
    text-align: center;
  }
}
</style>