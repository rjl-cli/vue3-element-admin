<template>
  <div id="login">
    <div class="content">
      <div class="logo"></div>
      <div class="title">登录</div>
      <div class="text">欢迎登录OA办公后台管理系统</div>
      <t-form
        ref="form"
        :data="formData"
        :colon="true"
        :label-width="0"
        @submit="onSubmit">
        <t-form-item name="username">
          <t-input
            v-model="formData.username"
            clearable
            placeholder="请输入账户名">
            <template #prefix-icon>
              <desktop-icon />
            </template>
          </t-input>
        </t-form-item>

        <t-form-item name="password">
          <t-input
            v-model="formData.password"
            type="password"
            clearable
            placeholder="请输入密码">
            <template #prefix-icon>
              <lock-on-icon />
            </template>
          </t-input>
        </t-form-item>
        <t-checkbox v-model="formData.checkbox">我已阅读并同意<span>《用户隐私政策》</span></t-checkbox>
        <t-form-item>
          <t-button
            theme="primary"
            type="submit"
            block
            :disabled="!formData.checkbox"
            >登录</t-button
          >
        </t-form-item>
      </t-form>
      <div class="forget">忘记密码请联系管理员</div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const formData = ref<{ username: string; password: string; checkbox: boolean }>({ username: "", password: "", checkbox: false });
const onSubmit = () => {
  console.log(formData.value);
};
</script>
