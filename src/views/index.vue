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
          <swiper-slide v-for="(ad,index) in adList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+ad.id">
              <img :src="ad.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
        </swiper>
      </div>
    </div>
    <service-bar></service-bar>
  </div>
</template>

<script>
import { Swiper, SwiperSlide, directive } from "vue-awesome-swiper";
import ServiceBar from "@/components/ServiceBar.vue";
import "swiper/css/swiper.css";
export default {
  name: "index",
  data() {
    return {
      adList: [
        {
          id: "42",
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
  components: {
    Swiper,
    SwiperSlide,
    ServiceBar
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
    position: relative;
    .swiper-box {
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
            .children{
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
  }
}
</style>