<template>
  <div class="header">
    <div class="nav-topbar">
      <div class="container">
        <div class="topbar-menu">
          <a href="javascript:;">首页</a>
          <a href="javascript:;">MUI</a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
          <a href="javascript:;"></a>
        </div>
        <div class="topbar-user">
          <a href="javascript:;" v-if="username">{{username}}</a>
          <a href="javascript:;" @click="goToLogin" v-else>登录</a>
          <a href="javascript:;" v-if="!username">注册</a>
          <a href="javascript:;" v-if="username">我的订单</a>
          <a href="javascript:;" v-on:click="goToCart" class="my-cart"> 
            <span class="icon-cart"></span>购物车
          </a>
        </div>
      </div>
    </div>
    <div class="nav-header">
      <div class="container">
        <div class="header-logo">
          <a href="/#/index"></a>
        </div>
        <div class="header-menu">
          <div class="item-menu">
            <span>小米手机</span>
            <div class="children">
              <ul>
                <li class="product" v-for="(item,index) in phoneList" :key="index">
                  <a v-bind:href="'/#/product/'+item.id" target="_blank">
                    <div class="pro-img">
                      <img
                        v-lazy="item.mainImage"
                        :alt="item.subtitle"
                      />
                    </div>
                    <div class="pro-name">{{item.name}}</div>
                    <div class="pro-price">{{item.price | currency}}</div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="item-menu">
            <span>RedMi红米</span>
            <!-- <div class="children"></div> -->
          </div>
          <div class="item-menu">
            <span>智能硬件</span>
            <!-- <div class="children"></div> -->
          </div>
        </div>
        <div class="header-search">
          <div class="wrapper">
            <input type="text" name="keywork" />
            <a href="#"></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.header {
  .nav-topbar {
    height: 39px;
    line-height: 39px;
    background: #333333;
    .container {
      @include flex();
      a {
        color: #b0b0b0b0;
        margin-right: 17px;
        display: inline-block;
      }
      .my-cart {
        width: 110px;
        background-color: #ff6600;
        text-align: center;
        color: #ffffff;
        .icon-cart {
          @include bgImg(16px, 12px, "/imgs/icon-cart.png", contain);
          margin-right: 4px;
        }
      }
    }
  }

  .nav-header {
    .container {
      position: relative;
      height: 112px;
      @include flex();
      .header-logo {
        display: inline-block;
        width: 55px;
        height: 55px;
        background: #ff6600;
        a {
          display: inline-block;
          width: 110px;
          height: 55px;
          &:before {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-logo.png", 55px);
            transition: margin 0.2s;
          }
          &:after {
            content: " ";
            @include bgImg(55px, 55px, "/imgs/mi-home.png", 55px);
          }
          &:hover::before {
            margin-left: -55px;
            transition: margin 0.2s;
          }
        }
      }
      .header-menu {
        width: 643px;
        display: inline-block;
        padding-left: 209px;
        .item-menu {
          line-height: 112px;
          display: inline-block;
          color: #333333;
          font-weight: bold;
          font-size: 16px;
          margin-right: 20px;
          span {
            cursor: pointer;
          }
          &:hover {
            color: $colorA;
            .children {
              opacity: 1;
              height: 220px;
            }
          }
          .children {
            z-index: 9;
            background-color: #ffffff;
            transition: opacity 0.2s;
            position: absolute;
            overflow: hidden;
            height: 0;
            top: 112px;
            left: 0;
            width: 1226px;
            opacity: 0;
            border-top: 1px solid rgba($color: #e5e5e5e5, $alpha: 1);
            box-shadow: 0px 7px 6px 0px rgba($color: #000000, $alpha: 0.11);
            transition: all 0.2s;
            .product {
              position: relative;
              text-align: center;
              font-size: 12px;
              line-height: 12px;
              a {
                display: inline-block;
              }
              height: 220px;
              width: 16.66%;
              display: inline-block;
              img {
                height: 111px;
                width: auto;
                margin-top: 26px;
              }
              //   .pro-img {
              //     //height: 120px;
              //   }
              .pro-name {
                font-weight: bold;
                margin-top: 19px;
                margin-bottom: 8px;
                color: $colorB;
                margin-top: 19px;
              }
              .pro-price {
                color: $colorA;
              }
              &:before {
                content: "";
                position: absolute;
                right: 0px;
                border-left: 1px solid $colorF;
                margin-top: 28px;
                height: 99px;
              }
              &:last-child:before {
                display: none;
              }
            }
          }
        }
      }
      .header-search {
        width: 319px;
        .wrapper {
          height: 50px;
          border: 1px solid #e0e0e0;
          display: flex;
          align-items: center;
          input {
            border-style: none;
            border-right: 1px solid #e0e0e0;
            height: 50px;
            width: 264px;
            padding-left: 10px;
            box-sizing: border-box;
          }
          a {
            @include bgImg(18px, 18px, "/imgs/icon-search.png", contain);
            margin-left: 16px;
          }
        }
      }
    }
  }
}
</style>
<script>
export default {
  name: "navheader",
  data() {
    return {
      username: "",
      phoneList: [],
    };
  },
  mounted() {
      this.getProductList();
  },
  filters:{
    currency(val){
      if(!val)
        return '¥0.00'
      return "¥"+val.toFixed(2)+"元起";

    }
  },
  methods: {
    getProductList() {
        this.axios.get('/products',{
            params:{
                categoryId:'100012',
                // pageSize:6
            }
        }).then((res)=>{
           if(res.list.length>6)
           {
             this.phoneList=res.list.slice(0,6);
           }
        });
    },
    goToCart(){
      this.$router.push('/cart');
    },
    goToLogin(){
      this.$router.push('/login');
    }
  }
};
</script>