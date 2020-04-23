<template>
  <div class="cart-box">
    <OrderNavHeader></OrderNavHeader>
    <div class="page-body">
      <div class="container">
        <div class="cart-list-box">
          <div class="list-header clearfix">
            <div class="col-check fl">
              <span class="icon-checkbox"></span>
              全选
            </div>
            <div class="col-img fl"></div>
            <div class="col-name fl">商品名称</div>
            <div class="col-price fl">价格</div>
            <div class="col-num fl">数量</div>
            <div class="col-total fl">小计</div>
            <div class="col-action fl">操作</div>
          </div>
          <div class="list-body clearfix">
            <div class="item">
              <div class="item-table">
                <div class="item-tr">
                  <div class="col-check fl">
                    <span class="icon-checkbox"></span>
                    
                  </div>
                  <div class="col-img fl">
                    <img src="/imgs/product/pms.png" alt />
                  </div>
                  <div class="col-name fl">小米手环4 NFC版 黑色</div>
                  <div class="col-price fl">999</div>
                  <div class="col-num fl">1</div>
                  <div class="col-total fl">999</div>
                  <div class="col-action fl">X</div>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="item-table">
                <div class="item-tr">
                  <div class="col-check fl">
                    <span class="icon-checkbox"></span>
                    
                  </div>
                  <div class="col-img fl">
                    <img src="/imgs/product/pms.png" alt />
                  </div>
                  <div class="col-name fl">小米手环4 NFC版 黑色</div>
                  <div class="col-price fl">999</div>
                  <div class="col-num fl">1</div>
                  <div class="col-total fl">999</div>
                  <div class="col-action fl">X</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="cart-bar">
          <div class="cart-bar-left">
            <a href="javascirpt:;" class="continue-shop">继续购物</a>
            <span class="count">共 2 件商品, 已选择 0 件</span>
          </div>
          <div class="cart-bar-right">
            <div class="priceCount">
              合计 :
              <em>0</em> 元
            </div>
            <div class="btn btn-default">去结算</div>
          </div>
        </div>
      </div>
    </div>

    <!-- <OrderNavFooter></OrderNavFooter> -->
    <NavFooter></NavFooter>
  </div>
</template>
<script>
import OrderNavFooter from "@/components/orderNavfooter.vue";
import OrderNavHeader from "@/components/orderNavHeader.vue";
import NavFooter from "@/components/NavFooter.vue";
export default {
  name: "cart",
  // eslint-disable-next-line vue/no-unused-components
  components: { OrderNavFooter, OrderNavHeader, NavFooter },
  data() {
    return {};
  },
  methods: {},
  mounted() {}
};
</script>

<style lang="scss" scoped>

.cart-bar {
      display: flex;
    justify-content: space-between;
  margin-top: 30px;
  height: 50px;
  line-height: 50px;

  .continue-shop {
    font-size: 14px;
    padding: 0 20px 0 40px;
    border-right: 1px solid #e0e0e0;
  }
  .count {
    margin-left: 20px;
  }
  span {
    font-size: 14px;
  }
  .cart-bar-right {
    .priceCount {
      display: inline-block;
      em {
        //height: 50px;
        line-height: 1px;
        color: #ff6600;
        font-size: 35px;
        font-style: normal;
      }
    }
    .btn {
      height: 50px;
      width: 210px;
      line-height: 50px;
      margin-left: 40px;
      font-size: 30px;
    }
  }
}

.cart-list-box {
  font-size: 14px;

}
.page-body {
  //padding-bottom: 30px;
  padding-top: 40px;
  .container {
    background: #fff;
  }
  background-color: #f5f5f5;

  .list-header {
    height: 70px;
    line-height: 70px;
    text-align: center;
    .fl {
      height: 70px;
      line-height: 70px;
    }
  }
}

.icon-checkbox {
  border: 1px solid #b0b0b0;
  width: 18px;
  height: 18px;
  display: inline-block;
  vertical-align: middle;
}

.col-check {
  line-height: 70px;
  width: 110px;
  height: 70px;
  font-size: 14px;
  span {
    display: inline-block;
    margin: 0 15px;
  }
}

.col-img {
  line-height: 70px;
  display: table-cell;
  width: 120px;
}
.col-name {
  line-height: 70px;
  display: table-cell;
  width: 380px;
}
.col-price {
  line-height: 70px;
  display: table-cell;
  width: 140px;
  padding-right: 81px;
}
.col-num {
  line-height: 70px;
  display: table-cell;
  width: 150px;
}
.col-total {
  line-height: 70px;
  display: table-cell;
  width: 120px;
}
.col-action {
  line-height: 70px;
  display: table-cell;
  width: 80px;
}

.list-body {
    .icon-checkbox{
   margin-left: -17px; 
  }
  .item {
    .item-table {
      display: table;
      .item-tr {
        display: table-row;
        div {
          display: table-cell;
        }
      }
    }
    border-top: 1px solid #e0e0e0;
    padding: 15px 20px 5px 0;
  }
  text-align: center;

  .col-img {
    img {
      width: 80px;
      height: 80px;
    }
  }
}
</style>