<template>
  <div class="index-box">
    <div class="container">
      <div class="swiper-box">
        <div class="nav-menu">
          <ul>
            <li class="nav-menu-item">
              <a href="javascript:;">手机 电话卡</a>
              <div class="children">
                <ul>
                  <li class="item">
                    <a href="/#/product">
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                      小米9C
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                </ul>
                <ul>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                  <li class="item">
                    <a href>
                      <img src="/imgs/nav-img/nav-1.png" alt />
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li class="nav-menu-item">
              <a href="javascript:;">电视 盒子</a>
            </li>
            <li class="nav-menu-item">
              <a href="javascript:;">笔记本 平板</a>
            </li>
            <li class="nav-menu-item">
              <a href="javascript:;">家电 插线板</a>
            </li>
          </ul>
        </div>
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide v-for="(ad,index) in adSwiperList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+ad.id">
              <img v-lazy="ad.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
      <div class="alist">
        <a :href="'/#/product/'+item.id" v-for="(item,index) in adsList" :key="index">
          <img v-lazy="item.img" :alt="item.text" />
        </a>
      </div>
      <div class="banner">
        <a href="/#/product/33">
          <img v-lazy="'/imgs/banner-1.png'" alt />
        </a>
      </div>
    </div>
    <div class="product-box">
      <div class="container">
        <h2>手机</h2>
        <div class="wrapper-box">
          <div class="warpper-left">
            <a href="#">
              <img v-lazy="'/imgs/mix-alpha.jpg'" alt />
            </a>
          </div>
          <div class="warpper-right">
            <div class="item-box" v-for="(arr,i) in productList" :key="i">
              <div class="item-content" v-for="(item,index) in arr" :key="index">
                <div class="item-title">
                  <!-- 目前没这个参数 -->
                  <span v-if="item.status==1">新品</span>
                </div>
                <img v-lazy="item.mainImage" alt />
                <div class="item-info">
                  <p class="item-name">{{item.name}}</p>
                  <p class="item-description">{{item.subtitle}}</p>
                  <p class="item-price" @click="addCart(item.id)">{{item.price | currency}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Modal modalType="big" :showModal="showModal" title="提示" sureText="查看购物车" buttonType="1" 
    @close="closeModal" 
    @submit="submit" 
    @cancel="cancel">
      <template v-slot:body>成功 添加到购物车</template>
    </Modal>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import ServiceBar from "@/components/ServiceBar.vue";
import Modal from "@/components/Modal.vue";
import "swiper/css/swiper.css";
export default {
  name: "index",
  data() {
    return {
      showModal: false,
      productList: [],
      adsList: [
        {
          id: "33",
          img: "/imgs/phone/1.png",
          text: null
        },
        {
          id: "43",
          img: "/imgs/phone/2.jpg",
          text: "小米"
        },
        {
          id: "44",
          img: "/imgs/phone/3.png",
          text: "小米"
        },
        {
          id: "45",
          img: "/imgs/phone/4.jpg",
          text: "小米"
        }
      ],
      adSwiperList: [
        {
          id: "46",
          img: "/imgs/slider/slide-1.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-2.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-4.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-5.jpg"
        },
        {
          id: "45",
          img: "/imgs/slider/slide-3.jpg"
        }
      ],
      swiperOptions: {
        autoplay: true,
        shadowOffset: 100,
        shadowScale: 0.6,
        effect: "cube",
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev"
        }
      }
    };
  },
  methods: {
    cancel(){
    console.log("cancel");
    },
    submit(){
      console.log("submit");
    },
    closeModal() {
      this.showModal = false;
    },
    init() {
      this.axios
        .get("/products", {
          params: {
            categoryId: 100012,
            pageNum: 1,
            pageSize: 14
          }
        })
        .then(res => {
          res.list = res.list.slice(6, 14);
          this.productList = [res.list.slice(0, 4), res.list.slice(4, 8)];
          console.log(res);
        });
    },
    addCart(val) {
      this.showModal = true;
      console.log(val);
      // this.axios.post(
      //   "/carts",
      //   {
      //     productId: val,
      //     selected: true
      //   },
      //   res => {
      //     console.log(res);
      //   }
      // );
    }
  },
  mounted() {
    this.init();
  },
  filters: {
    currency(val) {
      if (!val) return "¥0.00";
      return "¥" + val.toFixed(2);
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar,
    Modal
  },
  directives: {
    swiper: directive
  }
};
</script>


<style lang="scss">
@import "./../assets/scss/base.scss";
@import "./../assets/scss/mixin.scss";
@import "./../assets/scss/config.scss";
.index-box {
  .container {
    .swiper-box {
      position: relative;
      .swiper-container {
        --swiper-theme-color: #ff6600; /* 设置Swiper风格 */
        --swiper-navigation-color: #00ff33; /* 单独设置按钮颜色 */
        // --swiper-navigation-size: 30px; /* 设置按钮大小 */
        height: 451px;
        img {
          height: 100%;
          width: 100%;
        }
        .swiper-button-prev {
          left: 274px;
        }
      }
      .nav-menu {
        background-color: #33333375;
        position: absolute;
        z-index: 9;
        padding: 26px 0;
        box-sizing: border-box;
        height: 100%;
        width: 264px;
        .nav-menu-item {
          height: 50px;
          line-height: 50px;
          a {
            display: block;
            position: relative;
            font-size: 16px;
            padding-left: 30px;
            color: white;
            &:after {
              content: " ";
              @include bgImg(10px, 15px, "/imgs/icon-arrow.png");
              position: absolute;
              right: 30px;
              top: 15px;
            }
          }
          &:hover {
            background-color: $colorA;
            .children {
              display: block;
            }
          }
          .children {
            display: none;
            top: 0;
            left: 264px;
            background-color: #fff;
            position: absolute;
            height: 451px;
            width: 962px;
            border: 1px solid #e5e5e5e5;
            ul {
              height: 75px;
              display: flex;
              justify-content: space-between;
              li {
                height: 75px;
                line-height: 75px;
                flex: 1;
                img {
                  width: 35px;
                  height: 42px;
                  vertical-align: middle;
                }
                a {
                  color: #333333;
                  font-size: 14px;
                }
              }
            }
          }
        }
      }
    }
    .alist {
      margin-top: 13px;
      margin-bottom: 30px;
      @include flex();

      a {
        width: 296px;
        height: 167px;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
    .banner {
      margin-bottom: 50px;
      a {
        // height: 20px;
        img {
          width: 100%;
        }
      }
    }
  }
  .product-box {
    background-color: #f5f5f5;
    padding: 30px 0 50px;
    .container {
      h2 {
        height: 21px;
        line-height: 21px;
        font-weight: bold;
        font-size: 22px;
        margin-bottom: 20px;
      }
      .wrapper-box {
        display: flex;
        .warpper-left {
          margin-right: 16px;
          a {
            display: inline-block;
            img {
              width: 224px;
              height: 600px;
            }
          }
        }
        .warpper-right {
          width: 986px;
          .item-box {
            @include flex();
            margin-bottom: 10px;
            .item-content {
              text-align: center;
              background-color: #fff;
              flex: 1;
              height: 295px;
              margin-right: 10px;
              img {
                height: 195px;
                width: 100%;
              }
              &:last-child {
                margin-right: 0px;
              }
              .item-title {
                height: 24px;
                span {
                  display: inline-block;
                  width: 67px;
                  height: 24px;
                  background-color: #7ecf68;
                  line-height: 24px;
                }
              }
              .item-info {
                .item-name {
                  font-size: 14px;
                  color: #333;
                  font-weight: bold;
                  line-height: 14px;
                }
                .item-description {
                  color: #999;
                  line-height: 13px;
                  margin: 6px auto 13px;
                }
                .item-price {
                  color: #f20a0a;
                  cursor: pointer;
                  font-size: 14px;
                  font-weight: 700;
                  &:after {
                    content: " ";
                    @include bgImg(20px, 20px, "/imgs/icon-cart-hover.png");
                    vertical-align: sub;
                    margin-left: 4px;
                  }
                }
              }
            }
            &:last-child {
              margin-bottom: 0px;
            }
          }
        }
      }
    }
  }
}
</style>