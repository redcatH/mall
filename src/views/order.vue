<template>
  <div>
    <Orderheader></Orderheader>
    <router-view></router-view>
    <Orderfooter></Orderfooter>
  </div>
</template>
<script>
import Orderfooter from "@/components/orderNavfooter.vue";
import Orderheader from "@/components/orderNavHeader.vue";
export default {
  name: "order",
  components: {
    Orderheader,
    Orderfooter
  }
};
</script>