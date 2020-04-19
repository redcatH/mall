<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href>零度牛</a>
      <span>|</span>
      <a href>叶惠美</a>
      <span>|</span>
      <a href>小红猫</a>
      <span>|</span>
      <a href>全栈开发教程</a>
      <span>|</span>
      <a href>abp vnext商业版破解</a>
    </div>
    <div class="copynght">Copyright ©2019 <span class="">mi.futurefe.com</span>  All Rights Reserved.</div>
  </div>
</template>
<script>
export default {
  name: "navfooter"
};
</script>
<style lang="scss" scope>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      margin-bottom: 13px;
    }
  }
  .footer-link{
      a{
          color: #999999;
      }
      span{
          margin: 0 10px;
      }
      margin-bottom: 16px;
  }
  .copynght{
      span{
          color: #ff6600;
      }
  }
}
</style>