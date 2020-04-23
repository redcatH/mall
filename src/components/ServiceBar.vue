<template>
  <div class="container">
    <div class="service">
      <ul>
        <li>
          <span class="icon-setting"></span>
          <a>预约维修服务</a>
        </li>
        <li>
          <span class="icon-7day"></span>
          <a>七天无理由退货</a>
        </li>
        <li>
          <span class="icon-15day"></span>
          <a>15天免费换货</a>
        </li>
        <li>
          <span class="icon-post"></span>
          <a>520余家售后网点</a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "service-bar"
};
</script>

<style lang="scss" scoped>
@import "./../assets/scss/mixin.scss";
.service {
  color: #666666;
  padding: 33px 0;
  li {
    display: inline-block;
    width: 24.8%;
    text-align: center;
    border-right: 1px solid #e5e5e5e5;
    .icon-setting {
      @include bgImg(20px, 20px, "/imgs/icon-setting.png");
    }
    .icon-7day {
      @include bgImg(20px, 20px, "/imgs/icon-7day.png");
    }
    .icon-15day {
      @include bgImg(20px, 20px, "/imgs/icon-15day.png");
    }
    .icon-post {
      @include bgImg(20px, 20px, "/imgs/icon-post.png");
    }
    span {
      vertical-align: middle;
      margin-right: 8px;
    }
  }
  &:first-child:li {
    border-right: 0px;
  }
}
</style>