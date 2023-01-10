<script lang="ts" setup name="layout">
import AppTopNav from "./components/app-topNav.vue";
import AppHeader from "./components/app-header.vue";
import AppFooter from "./components/app-footer.vue";
import AppHeaderSticky from "./components/app-header-sticky.vue";
</script>
<template>
  <div>
    <AppTopNav></AppTopNav>
    <AppHeader></AppHeader>
    <AppHeaderSticky></AppHeaderSticky>
    <div class="app-body">
      <!-- 路由出口 -->
      <RouterView></RouterView>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<style lang="less" scoped></style>
