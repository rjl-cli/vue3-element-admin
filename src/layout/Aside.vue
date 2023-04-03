<template>
  <t-aside>
    <t-menu
      expand-mutex
      :collapsed="collapsed"
      theme="light"
      default-value="item1">
      <template #logo>
        <img :src="LogoImage" />
      </template>
      <MenuVue />
      <template #operations>
        <t-button
          variant="text"
          shape="square"
          @click="() => ChangeCollapsed()">
          <template #icon><t-icon name="view-list" /></template>
        </t-button>
      </template>
    </t-menu>
  </t-aside>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { storeToRefs, mapActions } from "pinia";
import { useGlobalStore } from "@/stores";
import MenuVue from "./Menu.vue";
import logo from "@/assets/logo.png";
import logo_small from "@/assets/logo_small.png";
//store解构
const { collapsed } = storeToRefs(useGlobalStore());

// 方法结构
const { ChangeCollapsed } = mapActions(useGlobalStore, ["ChangeCollapsed"]);

// 图标
const LogoImage = computed(() => (collapsed.value ? logo_small : logo));
</script>

<style></style>
