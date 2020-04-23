<template>
  <div class="detail_box">
    <productParam v-bind:title="product.name"></productParam>
    <div class="container clearfix">
      <div class="product_left fl">
        <swiper class="swiper" :options="swiperOptions">
          <swiper-slide v-for="(ad,index) in adSwiperList" v-bind:key="index">
            <a v-bind:href="'/#/product/'+ad.id">
              <img v-lazy="ad.img" alt />
            </a>
          </swiper-slide>
          <div class="swiper-pagination" slot="pagination"></div>
          <!-- <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>-->
        </swiper>
      </div>
      <div class="product_right fr">
        <div class="title">{{product.name}}</div>
        <div class="title_info">
          <p>
            相机全新升级 / 960帧超慢动作 / 手持超级夜景 / 全球首款双频GPS / 骁龙845处理器 / 红
            外人脸解锁 / AI变焦双摄 / 三星 AMOLED 屏
          </p>
        </div>
        <div class="delivery">小米直营</div>
        <div class="item_price">
          {{product.price}}元
          <span class="del">1999元</span>
        </div>
        <div class="user_location">
          <span class="icon_location"></span>
          <div class="addres">
            <span class="item">北京</span>
            <span class="item">北京市</span>
            <span class="item">朝阳区</span>
            <span class="item">安定门街道</span>
          </div>
          <div class="stock" v-if="product.stock>0">有现货</div>
          <div class="stock" v-if="product.stock<=0">缺货</div>
        </div>
        <div class="item_version">
          <div class="setp_title">选择版本</div>

          <ul class="phone_type clearfix">
            <li
              class="item"
              @click="liChecked(item.versionId)"
              v-for="(item,index) in versionList"
              v-bind:key="index"
              :class="versionCheckedId==item.versionId?'checked':''"
            >
              <a href="javascript:;">
                <span class="setp_name">{{item.name}}</span>
                <span class="setp_price">{{item.price}}元</span>
              </a>
            </li>
          </ul>
        </div>
        <div class="item_version">
          <h2>选择颜色</h2>
          <ul class="phone_type clearfix">
            <li class="item">
              <a class="color_name" href="javascirpt:;">
                <img src="/imgs/min.jpg" alt />
                深空灰
              </a>
            </li>
            <li class="item">
              <a class="color_name" href="javascirpt:;">
                <img src="/imgs/min.jpg" alt />
                深空灰
              </a>
            </li>
          </ul>
        </div>

        <div class="item_total">
          <div class="phone_info clearfix">
            <div class="fl">
              {{product.name}}
              {{versionCheckedName}}
              深灰色
            </div>
            <div class="fr">999元</div>
          </div>
          <div class="total">总计: 999元</div>
        </div>
        <div class="buy_box">
          <div class="btn" :class="product.stock<=0?'btn-default':''" @click="addCart()">加入购物车</div>
        </div>
      </div>
    </div>
    <div class="container">
      <serverBar></serverBar>
    </div>

    <Modal modalType="big" :showModal="showModal" title="提示" sureText="查看购物车" buttonType="1" 
    @close="closeModal" 
    @submit="submit" 
    @cancel="cancel">
      <template v-slot:body>成功 添加到购物车</template>
    </Modal>
  </div>
</template>

<script>
import productParam from "@/components/productParam.vue";
import serverBar from "@/components/ServiceBar.vue";
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import Modal from "@/components/Modal";
export default {
  name: "detail",
  components: {
    productParam,
    serverBar,
    Swiper,
    SwiperSlide,
    Modal
  },
  data() {
    return {
      showModal:false,
      versionCheckedName: "",
      versionCheckedId: 0,
      versionList: [
        {
          versionId: 1,
          name: "8GB+256GB",
          price: "1280"
        },
        { versionId: 2, name: "8GB+128GB", price: "999" },
        { versionId: 3, name: "8GB+64GB", price: "99" }
      ],
      product: {},
      swiperOptions: {
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          type: "bullets"
        },
        // navigation: {
        //   nextEl: ".swiper-button-next",
        //   prevEl: ".swiper-button-prev"
        // },
        loop: true
      },
      adSwiperList: [
        {
          id: "",
          img: ""
        },
        {
          id: "",
          img: ""
        }
      ]
    };
  },
  mounted() {
    this.getProductInfo();
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
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    liChecked(versionId) {
      this.versionCheckedId = versionId;
      for (let i = 0; i < this.versionList.length; i++) {
        if (this.versionList[i].versionId == versionId) {
          this.versionCheckedName = this.versionList[i].name;
        }
      }
    },
    addCart() {
      // to - do 加入购物车
      //let productId = this.$route.params.id;
      if(this.product.stock<=0)
      return;
      let selected=true;
      this.axios
        .post("/carts", {
          productId:this.product.id
          ,selected
        })
        // eslint-disable-next-line no-unused-vars
        .then(res => {
          this.showModal=true;
          this.$store.dispatch("saveCartCount",res.cartTotalQuantity)
        });
    }
  },
  computed: {}
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";

.product_left {
  margin-top: 30px;
  .swiper {
    width: 642px;
    height: 617px;
  }
}
.product_right {
  margin-top: 40px;
  font-size: 14px;
  width: 584px;
  .title {
    font-size: 24px;
  }
  .title_info {
    margin-top: 10px;
    color: #ff4a00;
  }
  .delivery {
    color: #ff4a00;
    margin-top: 20px;
  }
  .item_price {
    padding: 12px 0 20px;
    font-size: 16px;
    color: #ff4a00;
    span {
      color: #a6a6a6;
    }
    border-bottom: 1px solid #d7d7d7d7;
  }
  .user_location {
    position: relative;
    margin: 40px 0 0;
    border: 1px solid #e0e0e0;
    background-color: #fafafa;
    padding: 30px 40px 30px 55px;
    .icon_location {
      @include bgImg(24px, 24px, "/imgs/icon-loc.png");
      top: 34px;
      left: 22px;
      position: absolute;
    }
    .addres {
      line-height: 30px;
      display: inline-block;
      .item {
        margin-right: 14px;
      }
    }
    .stock {
      color: #ff4a00;
    }
  }
  .item_version {
    margin-top: 30px;
    .setp_title {
      font-size: 18px;
      line-height: 1;
    }
    .phone_type {
      cursor: pointer;
      position: relative;
      margin-top: 15px;
      margin-left: -6px;
      .item {
        font-size: 16px;
        border: 1px solid #e0e0e0;
        position: relative;
        text-align: center;
        img {
          height: 16px;
          width: 16px;
          margin-right: 7px;
        }
        .color_name {
          display: inline-block;
          text-align: center;
        }
        .setp_name {
          position: absolute;
          left: 50px;
        }
        .setp_price {
          position: absolute;
          right: 35px;
          color: #757575;
        }
      }

      li {
        margin-top: 10px;
        line-height: 42px;
        height: 42px;
        float: left;
        width: 287px;
        margin-left: 6px;
        &.checked {
          border: 1px solid #ff4a00;
          a {
            color: #ff4a00;
          }
        }
      }
      a {
        line-height: 42px;
        color: #333;
      }
    }
  }
  .item_total {
    margin-top: 30px;
    background-color: #f9f9fa;
    padding: 30px;
    .phone_info {
      height: 30px;
      line-height: 30px;
    }
    .total {
      margin-top: 40px;
      font-size: 24px;
      color: #ff6700;
    }
  }
  .buy_box {
    margin-top: 20px;
    .btn {
      width: 287px;
      height: 42px;
      line-height: 42px;
      font-size: 18px;
    }
  }
}
</style>