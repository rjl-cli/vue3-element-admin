<template>
  <t-menu-item value="dashboard">
    <template #icon>
      <t-icon name="dashboard" />
    </template>
    {{ $t("layout.menu.dashboard") }}
  </t-menu-item>
  <t-submenu value="4">
    <template #icon>
      <t-icon name="play-circle" />
    </template>
    <template #title>
      <span>视频区</span>
    </template>
    <t-menu-item value="4-1"> 二级菜单内容 </t-menu-item>
    <t-menu-item value="4-2"> 二级菜单内容 </t-menu-item>
    <t-menu-item value="4-3"> 二级菜单内容 </t-menu-item>
  </t-submenu>
</template>

<script setup lang="ts"></script>

<style></style>
