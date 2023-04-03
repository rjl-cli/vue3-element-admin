import { defineStore } from "pinia";
export const useGlobalStore = defineStore("global", {
  state: () => ({
    loading: false,
    token: "",
    theme: "light" as "light" | "dark",
    collapsed: false, //侧栏是否收起
  }),
  getters: {},
  actions: {
    //  启动弹框
    LoadingStart() {
      this.loading = true;
    },

    //  关闭弹框
    LoadingOff() {
      this.loading = false;
    },

    // 深色模式切换
    SetTheme() {
      this.theme === "light" && document.documentElement.removeAttribute("theme-mode"); // 重置为浅色模式
      this.theme === "dark" && document.documentElement.setAttribute("theme-mode", "dark"); // 设置暗色模式
    },

    // 修改侧栏状态
    ChangeCollapsed() {
      this.collapsed = !this.collapsed;
    },
  },
  persist: true,
});
