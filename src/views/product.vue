<template>
  <div class="product_box">
    <productParam v-bind:title="product.name">
      <template v-slot:buy>
        <div class="btn" @click="buy">立坳购买</div>
      </template>
    </productParam>
    <div class="top_img"></div>
    <div class="top1_img"></div>
    <div class="container"></div>

    <div class="container"></div>
    <div class="video_box">
      <div class="video_bg">
        <div class="bg_overlay"></div>
        <img @click="showVideo" src="/imgs/product/video_bg.jpeg" alt />
        <span class="icon_play" @click="showVideo"></span>
      </div>
      <div class="overlay" v-if="showSlide"></div>
      <div class="video" v-bind:class="{'slide':showSlide}">
        <span class="icon-close" @click="closeVideo">X</span>
        <video id="video" src="/imgs/product/video.mp4" controls="controls"></video>
      </div>
    </div>
    <div>
      <img src="/imgs/product/3.jpg" alt />
    </div>
  </div>
</template>

<script>
import productParam from "./../components/productParam";
export default {
  name: "product",
  data() {
    return {
      showSlide: false,
      product: {}
    };
  },
  components: {
    productParam
  },
  mounted() {
    this.getProductInfo();
  },
  methods: {
    buy() {
      this.$router.push(`/detail/${this.product.id}`);
    },
    getProductInfo() {
      let id = this.$route.params.id;
      this.axios.get(`/products/${id}`).then(res => {
        this.product = res;
      });
    },
    showVideo() {
      this.showSlide = true;
      document.getElementById("video").play();
    },
    closeVideo() {
      this.showSlide = false;
      document.getElementById("video").pause();
    }
  }
};
</script>

<style lang="scss">
@import "./../assets/scss/mixin.scss";

.product_box {
  .btn {
    margin-left: 10px;
    cursor: pointer;
    transition: all 0.4;
    &:hover {
      transform: scale(1.1);
    }
  }
  .video_box {
    .video_bg {
      position: relative;
      height: 1080px;
      .bg_overlay {
        position: absolute;
        width: 100%;
        height: 100%;
        background-color: #333;
        opacity: 0.2;
      }
      .icon_play {
        position: absolute;
        top: 50%;
        left: 50%;
        @include bgImg(40px, 40px, "/imgs/product/play-s.png");
        transition: all 0.3s;
        z-index: 2;
        &:hover {
          transform: scale(1.2);
        }
      }
    }
    .overlay {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: #333;
      opacity: 0.5;
      z-index: 1;
    }
    .video {
      z-index: 10;
      position: fixed;
      top: -50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 1000px;
      opacity: 0;
      transition: all 0.4s;
      video {
        width: 100%;
        height: 100%;
      }
      &.slide {
        opacity: 1;
        top: 50%;
      }
      .icon-close {
        position: absolute;
        top: 5px;
        right: 5px;
        height: 30px;
        width: 30px;
        text-align: center;
        line-height: 30px;
        border-radius: 15px;
        color: #999999;
        font-size: 18px;
        z-index: 10;
        cursor: pointer;
        &:hover {
          background-color: #ff6600;
          color: #ffffff;
        }
      }
    }
  }
}

.top_img {
  background: url("/imgs/product/1.jpg") no-repeat center;
  height: 974px;
}
.top1_img {
  height: 1220px;
  background: url("/imgs/product/2.jpg") no-repeat center;
}
</style>>

