<template>
  <t-layout>
    <AsideVue />
    <t-layout>
      <HeaderVue />
      <ContentVue />
      <FooterVue />
    </t-layout>
  </t-layout>
</template>

<script setup lang="ts">
import AsideVue from "./Aside.vue";

import HeaderVue from "./Header.vue";
import ContentVue from "./Content.vue";
import FooterVue from "./Footer.vue";
</script>

<style></style>
