<template>
  <el-table>
    <el-table-column prop="date" label="Date" />
    <el-table-column prop="name" label="Name" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup lang="ts">
const props = defineProps<>()
console.log(props);
</script>
<style></style>
