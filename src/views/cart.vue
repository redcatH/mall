<template>
  <div>
    <OrderNavHeader></OrderNavHeader>
    <div>this page is cart</div>
    <OrderNavFooter></OrderNavFooter>
  </div>
</template>
<script>
import OrderNavFooter from "@/components/orderNavfooter.vue";
import OrderNavHeader from "@/components/orderNavHeader.vue";
export default {
  name: "cart",
  components: { OrderNavFooter, OrderNavHeader }
};
</script>