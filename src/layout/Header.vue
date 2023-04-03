<template>
  <t-header>
    <t-head-menu default-value="2-1" expand-type="popup">
      <t-button variant="text" shape="square">
        <template #icon>
          <t-icon name="app"></t-icon>
        </template>
      </t-button>
      <template #operations>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="search" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="mail" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="user" /></template>
        </t-button>
        <t-button variant="text" shape="square">
          <template #icon><t-icon name="ellipsis" /></template>
        </t-button>
      </template>
    </t-head-menu>
  </t-header>
</template>

<script setup lang="ts"></script>

<style></style>
