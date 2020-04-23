<template>
  <div class="login-box">
    <div class="container">
      <div class="header">
        <div class="logo">
          <a href>
            <img src="/imgs/login-logo.png" alt />
          </a>
        </div>
      </div>
    </div>
    <div class="wrapper-bg">
      <div class="container">
        <div class="login-form">
          <div class="login-title">
            <a class="accountLogin">账号登录</a>
            <a class="codeLogin">扫码登录</a>
          </div>
          <div class="login-body">
            <div class="username">
              <input type="text" placeholder="请输入账号" v-model="username"/>
            </div>
            <div class="userpwd">
              <input type="password" placeholder="请输入密码" v-model="password"/>
            </div>
          </div>
          <div class="login-btn">
            <input type="button" class="btn btn-login" value="登录" @click="login"/>
          </div>
          <div class="login-tips">
            <a href="javascript:;" class="phone-LoginOrReg">手机短信登录/注册</a>
            <div class="reg">
              <a>立即注册</a>
              <a>| 忘记密码?</a>
            </div>
          </div>
          <fieldset class="other-hr">
          </fieldset>
          <div class="other-type-links">
            <a href="javascript:;" class="icon_type btn_qq"><i class="btn_sns_icontype icon_default_qq"></i></a>
            <a href="javascript:;" class="icon_type btn_weibo"><i class="btn_sns_icontype icon_default_weibo"></i></a>
            <a href="javascript:;" class="icon_type btn_alipay"><i class="btn_sns_icontype icon_default_alipay"></i></a>
            <a href="javascript:;" class="icon_type btn_weixin"><i class="btn_sns_icontype icon_default_weixin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "login",
  data(){
      return{
          username:'',
          password:''
      }
  },
  methods:{
      login(){
          this.axios.post("/user/login",{
              username:this.username,
              password:this.password
          }).then((res)=>{
              this.$cookie.set('userid',res.id,{expires:'1m'});
              this.$store.dispatch('saveUserName',res.username);
              this.$router.push('index');
          }).catch(()=>{
          });
      }
  }
};
</script>

<style lang="scss">


.btn_facebook {
    background-color: #3a5897
}

.btn_qq {
    background-color: #0288d1
}

.btn_weibo {
    background-color: #d32f2f
}

.btn_alipay {
    background-color: #0ae
}

.btn_weixin {
    background-color: #00d20d
}


.icon_type{
    width: 30px;
    height: 30px;
    display: inline-block;
    border-radius: 50%;
    margin-right: 15px;
}



.btn_sns_icontype {
    background: url(https://account.xiaomi.com/static/res/166d6dc/account-static/respassport/acc-2014/img/icons_type.png) no-repeat center;
    width: 18px;
    height: 18px;
    display: inline-block;
    margin-top: 4px;
}

.icon_default_qq {
    background-position: -19px 0
}
.icon_default_weibo {
    background-position: -38px 0
}

.icon_default_alipay {
    background-position: -57px 0;
    width: 25px
}

.icon_default_weixin {
    background-position: -83px 0;
    width: 24px
}


.login-box {
  .container {
    .header {
      .logo {
        height: 98px;
        a {
          display: inline-block;
        }
      }
    }
  }
  .wrapper-bg {
    background: url("/imgs/login-bg.jpg") no-repeat 50%;
    width: 100%;
    .container {
      position: relative;
      height: 576px;
      .login-form {
        text-align: center;
        padding: 50px;
        position: absolute;
        height: 400px;
        width: 348px;
        background-color: #fff;
        right: 20px;
        top: 50px;
        .login-title {
          margin-bottom: 20px;
          a {
            text-align: center;
            width: 170px;
            display: inline-block;
            font-size: 22px;
            font-weight: bold;
            line-height: 50px;
            position: relative;
            &:nth-child(1) {
              color: #ff6600;
              &:after {
                content: " ";
                border-left: 3px solid #e0e0e0;
                height: 22px;
                position: absolute;
                right: 0px;
                vertical-align: middle;
                top: 14px;
              }
            }
          }
        }
        .login-body {
          input {
            width: 352px;
            margin-bottom: 15px;
            height: 45px;
            padding: 15px;
            border: 1px solid #e0e0e0;
            box-sizing: border-box;
          }
        }
        .login-btn {
          margin-bottom: 10px;
          .btn-login {
            width: 352px;
            height: 45px;
          }
        }
        .login-tips {
          margin-bottom: 60px;
          a {
            font-size: 14px;
            line-height: 15px;
          }
          display: flex;
          justify-content: space-between;
          .phone-LoginOrReg {
            color: #ff6600;
          }
          .reg {
            color: #999;
          }
        }
        .other-hr{
            border-style: none;
            border-top: 1px solid #b0b0b0;
            color: #b0b0b0;
        }
        .other-type-lins{

        }
      }
    }
  }
}
</style>